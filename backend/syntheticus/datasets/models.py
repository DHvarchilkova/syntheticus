from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Dataset(models.Model):
    dataset = models.FileField(blank=False, null=False)
    user = models.ForeignKey(
        verbose_name='post',
        to=User,
        on_delete=models.CASCADE,
        related_name='datasets',
    )

    def __str__(self):
        return self.dataset.name
