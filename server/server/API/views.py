from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
import json

# Create your views here.

class AnalzyeView(APIView):
    def post(self, request):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        hit = body['hit']
        missed = body['missed']
        percentage = body['hit'] / (body['hit'] + body['missed'])
        return Response({
            'hit': hit,
            'missed': missed,
            'hitPercentage': percentage
        })

