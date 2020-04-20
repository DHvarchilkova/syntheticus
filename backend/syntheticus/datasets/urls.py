from django.urls import path
from .views import DatasetUploadView, ListDatasetsView, ListReportView

urlpatterns = [
    path('upload', DatasetUploadView.as_view()),
    path('list/<str:user_username>', ListDatasetsView.as_view()),
    # path('report/<int:user_id>/<str: dataset_uploaded>/<str: synthetic_dataset>/<str: column_name>', DatasetReportDownloadView.as_view())
    path('get_report/<int:user_id>/<str:dataset_name>/<str:synthetic_dataset>', ListReportView.as_view())
]
