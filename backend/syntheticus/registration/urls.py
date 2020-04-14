from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from syntheticus.registration.views import TokenObtainPairViewWithUserProfile, Register, RegisterValidate, PasswordReset, \
    PasswordResetValidate

app_name = 'registration'

urlpatterns = [
    path('token', TokenObtainPairViewWithUserProfile.as_view(), name='token_obtain_pair'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify', jwt_views.TokenVerifyView.as_view(), name='token_verify'),

    path('password-reset', PasswordReset.as_view()),
    path('password-reset/validation', PasswordResetValidate.as_view()),

    path('', Register.as_view()),
    path('validate', RegisterValidate.as_view())

]
