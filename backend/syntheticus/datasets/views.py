from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .serializers import DatasetSerializer


class DatasetUploadView(APIView):
    parser_class = (FileUploadParser,)
    permission_classes = []

    def post(self, request, *args, **kwargs):

        dataset_serializer = DatasetSerializer(data=request.data)

        if dataset_serializer.is_valid():
            dataset_serializer.save()
            # call to data science BE
            return Response(dataset_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(dataset_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
