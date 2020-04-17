from django.urls import path
from .views import DatasetUploadView, ListDatasetsView

urlpatterns = [
    path('upload', DatasetUploadView.as_view()),
    path('list/<str:user_username>', ListDatasetsView.as_view())
]
