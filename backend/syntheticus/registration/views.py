from django.contrib.auth.models import Group
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import EmailValidation, VALIDATION_TYPES
from .serializers import EmailValidationSerializer, \
    TokenObtainPairViewWithUserProfileSerializer, EmailValidationPasswordSerializer, CreateEmailValidationSerializer, \
    CreatePasswordEmailValidationSerializer
from .models import Profile
from ..users.serializers import CreateUserSerializer, FullUserSerializer

User = get_user_model()


class Register(CreateAPIView):
    serializer_class = CreateEmailValidationSerializer
    permission_classes = []

    def perform_create(self, serializer):
        serializer.validated_data['type'] = VALIDATION_TYPES['UserRegistration']
        serializer.save()


class RegisterValidate(APIView):
    permission_classes = []

    def post(self, request):
        data = request.data
        if "validation_code" not in data and "code" in data:
            data["validation_code"] = data["code"]
        user_registration_serializer = EmailValidationSerializer(data=request.data)
        user_registration_serializer.is_valid(raise_exception=True)

        try:
            user_registration = EmailValidation.objects.get(
                email__to__contains=user_registration_serializer.validated_data['email'],
                validation_code=user_registration_serializer.validated_data['validation_code'],
                type=VALIDATION_TYPES['UserRegistration'])
        except Group.DoesNotExist:
            return Response({"Fail": "Email or validation_code incorrect."}, status=status.HTTP_400_BAD_REQUEST)

        if user_registration.code_used:
            return Response({"Fail": "Validation_code has been used."}, status=status.HTTP_418_IM_A_TEAPOT)

        user_serializer = CreateUserSerializer(data=request.data)
        user_serializer.is_valid(raise_exception=True)
        new_user = User.objects.create_user(**user_serializer.validated_data)

        user_registration.code_used = True
        user_registration.save()
        Profile.objects.create(user=new_user)
        serializer = FullUserSerializer(new_user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TokenObtainPairViewWithUserProfile(TokenObtainPairView):
    serializer_class = TokenObtainPairViewWithUserProfileSerializer


class PasswordReset(CreateAPIView):
    serializer_class = CreatePasswordEmailValidationSerializer
    permission_classes = []

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        if not User.objects.filter(email=serializer.validated_data['email']).exists():
            return Response(status=status.HTTP_201_CREATED)
        self.perform_create(serializer)
        return Response(status=status.HTTP_201_CREATED)

    def perform_create(self, serializer):
        serializer.validated_data['type'] = VALIDATION_TYPES['PasswordReset']
        serializer.save()


class PasswordResetValidate(APIView):
    permission_classes = []

    def post(self, request):
        data = request.data
        if "validation_code" not in data and "code" in data:
            data["validation_code"] = data["code"]
        password_reset_serializer = EmailValidationPasswordSerializer(data=request.data)
        password_reset_serializer.is_valid(raise_exception=True)

        try:
            password_reset = EmailValidation.objects.get(
                email__to__contains=password_reset_serializer.validated_data['email'],
                validation_code=password_reset_serializer.validated_data['validation_code'],
                type=VALIDATION_TYPES['PasswordReset'])
        except Group.DoesNotExist:
            return Response({"Fail": "Email or validation_code incorrect."}, status=status.HTTP_400_BAD_REQUEST)

        if password_reset.code_used:
            return Response({"Fail": "Validation_code has been used."}, status=status.HTTP_418_IM_A_TEAPOT)

        user = User.objects.get(email=password_reset_serializer.validated_data['email'])
        user.set_password(password_reset_serializer.validated_data['password'])
        user.save()

        password_reset.code_used = True
        password_reset.save()
        return Response(status=status.HTTP_201_CREATED)
