from django.db import models
from django.urls import reverse
from django.utils import timezone


class GameInfo(models.Model):
    date = models.DateTimeField('Дата',default=timezone.now)
    game_time = models.IntegerField('Продолжительность в секундах')
    try_count = models.IntegerField('Кол-во попыток')

    class Meta:
        db_table = "game_info"
# Create your models here.
