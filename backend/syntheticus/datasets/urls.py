from django.urls import path
from .views import *

urlpatterns = [
    path('', DatasetUploadView.as_view())
]
