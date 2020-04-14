from abc import ABC
from random import randrange

from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import EmailValidation
from ..emails.models import Email
from ..users.serializers import FullUserSerializer

User = get_user_model()


def user_with_email_not_existing(email):
    try:
        User.objects.get(email=email)
        raise ValidationError(message='This email is taken')
    except User.DoesNotExist:
        return email


def email_does_exist(email):
    try:
        User.objects.get(email=email)
        return email
    except User.DoesNotExist:
        raise ValidationError(message='User does not exist!')


class CreatePasswordEmailValidationSerializer(serializers.Serializer):
    email = serializers.EmailField(validators=[email_does_exist])

    def save(self):
        validation_code = randrange(10000000, 100000000)
        email = Email.objects.create(
            validation_code=validation_code,
            to=self.validated_data.get('email'),
            type=self.validated_data.get('type')
        )
        new_validation = EmailValidation.objects.create(
            validation_code=validation_code,
            email=email,
            type=self.validated_data.get('type'))
        return new_validation

class CreateEmailValidationSerializer(serializers.Serializer):
    email = serializers.EmailField(validators=[user_with_email_not_existing])

    def save(self):
        validation_code = randrange(10000000, 100000000)
        email = Email.objects.create(
            validation_code=validation_code,
            to=self.validated_data.get('email'),
            type=self.validated_data.get('type')
        )
        new_validation = EmailValidation.objects.create(
            validation_code=validation_code,
            email=email,
            type=self.validated_data.get('type'))
        return new_validation

class EmailSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = EmailValidation
        fields = ['email']


class EmailValidationSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = EmailValidation
        fields = ['email', 'validation_code']


class EmailValidationPasswordSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField(max_length=200)

    class Meta:
        model = EmailValidation
        fields = ['email', 'validation_code', 'password']


class NewUserSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()

    class Meta:
        model = EmailValidation
        fields = ['email']


class TokenObtainPairViewWithUserProfileSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        data['user'] = FullUserSerializer(self.user).data
        return data
