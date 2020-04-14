from django.db import models
from django.contrib.auth import get_user_model

from syntheticus.emails.models import Email

User = get_user_model()

VALIDATION_TYPES = {
    'UserRegistration': 'UR',
    'PasswordReset': 'PR',
}
VALIDATION_TYPE_CHOICES = [(value, key) for value, key in enumerate(VALIDATION_TYPES)]


class EmailValidation(models.Model):
    email = models.ForeignKey(to=Email, on_delete=models.SET_NULL, null=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    validation_code = models.IntegerField()
    type = models.CharField(max_length=2, choices=VALIDATION_TYPE_CHOICES)
    code_used = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.email} : {VALIDATION_TYPES[self.type]} ({"Unused" if self.code_used else "Used"})'


class Profile(models.Model):
    user = models.OneToOneField(
        verbose_name='user',
        related_name='profile',
        to=User,
        on_delete=models.CASCADE,
        unique=True,
        primary_key=True,
    )

    def __str__(self):
        return self.user.username
