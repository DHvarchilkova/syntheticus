from django.urls import path

from syntheticus.users.views import RetrieveUser, RetrieveUpdateDestroyLoggedInUser

urlpatterns = [
    # path('', ListUsers.as_view(), name='list-users'),
    path('<int:user_id>/', RetrieveUser.as_view(), name='retrieve-user'),
    path('', RetrieveUpdateDestroyLoggedInUser.as_view(), name='retrieve-update-destroy-logged-in-user'),
]
