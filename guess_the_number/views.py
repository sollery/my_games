import json
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import render
from .models import *
from datetime import datetime


def index(request):
    if request.method == "POST":
        temp = json.load(request)
        print(temp)
        res = GameInfo(game_time=temp['game_time'], try_count=temp['steps'])
        res.save()
        now = datetime.now()
        return HttpResponse(now.strftime("%Y-%b-%d %H:%M:%S"))
    headers_rows = GameInfo._meta.get_fields()
    values_columns = [headers_rows[i].verbose_name for i in range(1, len(headers_rows))]
    rows = GameInfo.objects.all()
    return render(request, 'guess_the_number/index.html',{'values_columns': values_columns,'rows': rows})


# def games_info(request):
#     headers_rows = GameInfo._meta.get_fields()
#     values_columns = [headers_rows[i].verbose_name for i in range(1, len(headers_rows))]
#     rows = GameInfo.objects.all()
#     return render(request, 'guess_the_number/games_info.html',{'values_columns': values_columns,'rows': rows})