from django.contrib.auth import get_user_model
from rest_framework.generics import RetrieveAPIView, RetrieveUpdateDestroyAPIView

from .serializers import UserSerializer

User = get_user_model()


class RetrieveUser(RetrieveAPIView):
    """
    Retrieve one User.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()
    lookup_url_kwarg = 'user_id'


class RetrieveUpdateDestroyLoggedInUser(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve logged-in User.

    update:
    Update User.

    delete:
    Delete logged-in User.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def get_object(self):
        return self.request.user
