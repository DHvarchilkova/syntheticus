from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import DatasetSerializer
from .models import Dataset
from django.conf import settings
import requests


class DatasetUploadView(APIView):
    parser_class = (FileUploadParser,)
    permission_classes = []

    def post(self, request, *args, **kwargs):
        dataset_serializer = DatasetSerializer(data=request.data)
        if dataset_serializer.is_valid():
            dataset_serializer.save()

            # call to data science BE
            ds_full_url = settings.DATASCIENCE_URL + "put_dataset/" + \
                          str(request.user.id) + \
                          "/" + request.data['dataset'].name[0:-7]
            # send request
            r = requests.put(url=ds_full_url, files={"dataset": request.data['dataset']})
            # check response for errors
            #       if r.status_code >= 200 and r.status_code < 300:
            #          pass
            return Response(dataset_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(dataset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListDatasetsView(APIView):
    permission_classes = []

    def get(self, request, *args, **kwargs):
        # call to data science BE
        ds_full_url = settings.DATASCIENCE_URL + "list_datasets/" + kwargs.get('user_username')
        r = requests.get(url=ds_full_url)
        if r.status_code != 200:
            return Response(status=status.HTTP_418_IM_A_TEAPOT)
        return Response(data=r.text, status=status.HTTP_200_OK, content_type="application/json")
