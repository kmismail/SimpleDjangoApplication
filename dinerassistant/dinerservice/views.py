from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
from functools import reduce

# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_question(request,eventid):
    json_data = open('./questions.json','r') 
    questions = json.load(json_data)
    response = next(question for question in questions if question['eventid'] == eventid)
    return HttpResponse(json.dumps(response), content_type='application/json')

@csrf_exempt 
def log_chat(request):
    chat_transcript = request.body.decode('utf-8')
    print(' Transcript :- '+ chat_transcript)
    return HttpResponse(status=204)
