from django.contrib.auth import get_user_model
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import DatasetSerializer
from django.conf import settings
import requests

User = get_user_model()


class DatasetUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.id
        dataset_serializer = DatasetSerializer(data=data)
        user_id = request.user.id
        user = User.objects.get(id=user_id)
        if dataset_serializer.is_valid():
            dataset_serializer.save()

            # call to data science BE
            ds_full_url = settings.DATASCIENCE_URL + "put_dataset/" + user.username
            ds_full_url += "/" + request.data['dataset'].name[0:-7]
            # send request
            #files = [
            #    ('dataset', open('/media-files/' + request.data['dataset'].name, 'rb'))
            #]
            files = {
                'dataset': open('/media-files/' + request.data['dataset'].name, 'rb')
            }
            r = requests.put(url=ds_full_url, files=files)
            # check response for errors
            if 200 <= r.status_code < 300:
                return Response(dataset_serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(dataset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(dataset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ListDatasetsView(APIView):

    def get(self, request, *args, **kwargs):
        ds_full_url = settings.DATASCIENCE_URL + "list_datasets/" + request.user.username
        r = requests.get(url=ds_full_url)
        if r.status_code != 200:
            return Response(status=status.HTTP_418_IM_A_TEAPOT)
        return Response(data=r.text, status=status.HTTP_200_OK, content_type="application/json")


class ListReportView(APIView):

    def get(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs.get('user_id'))
        # call to data science BE
        ds_full_url = settings.DATASCIENCE_URL + "get_report/" + user.username
        ds_full_url += "/" + kwargs.get('dataset_name') + "/" + kwargs.get('synthetic_dataset_name')
        r = requests.get(url=ds_full_url)
        if r.status_code != 200:
            return Response(status=status.HTTP_418_IM_A_TEAPOT)
        return Response(data=r.text, status=status.HTTP_200_OK, content_type="application/json")
