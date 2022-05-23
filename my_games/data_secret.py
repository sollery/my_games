SECRET_KEY = 'django-insecure-(du+yoz8kj-ev4wnr+-zbw=ce+^bfx%#cq$f(ag25=(#9rsljb'
PGPASS = '127.0.0.1:5432:schedule:ilya:asdwow'


def read_pgpass():
    words = PGPASS.split(':')

    return {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'HOST' : words[0],
            'PORT' : words[1],
            'NAME': words[2],
            'USER': words[3],
            'PASSWORD': words[4],
            }