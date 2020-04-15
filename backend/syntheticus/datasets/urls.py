from django.urls import path
from .views import DatasetUploadView

urlpatterns = [
    path('', DatasetUploadView.as_view())
]
