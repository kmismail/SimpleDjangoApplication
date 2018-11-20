from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('getjson/<eventid>',views.get_question,name='get_question'),
    path('logchat',views.log_chat,name='log_chat')
]