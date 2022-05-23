import json
from django.http import HttpResponseRedirect
from django.shortcuts import render
from .models import *


def index(request):
    if request.method == "POST":
        temp = json.load(request)
        print(temp)
        res = GameInfo(game_time=temp['game_time'], try_count=temp['steps'])
        res.save()
    return render(request, 'guess_the_number/index.html')


def games_info(request):
    headers_rows = GameInfo._meta.get_fields()
    values_columns = [headers_rows[i].verbose_name for i in range(1, len(headers_rows))]
    rows = GameInfo.objects.all()
    return render(request, 'guess_the_number/games_info.html',{'values_columns': values_columns,'rows': rows})