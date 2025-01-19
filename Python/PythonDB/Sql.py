## SQL + Python

# Task 1 how to integrate postgres into python

# we need to add the credentials of our postgres, library, host and ip

## need to install module pychopg2 module

import psycopg2

try:
    cur=None
    conn=None
    try:
       conn=psycopg2.connect(dbname="postgres",host="localhost",port=5433,user="postgres",password="Paarth@12")
       print("Connected to DB")
    except Exception as error:
        print(error)
    cur=conn.cursor()
    query='''Create Table Movies(mid INT PRIMARY KEY, movie_name VARCHAR NOT NULL, movie_length INT NOT NULL, movie_rating INT NOT NULL)'''
    insert_query='''Insert into Movies Values(%s,%s,%s,%s)'''
    select_query='''Select*from Movies'''
    keys=('2','Omkara',150,9)
    cur.execute(select_query)
    print(type (cur.fetchall()))
    conn.commit()
except Exception as error:
    print(error)
finally:
    if cur!=None:
        cur.close()
    if conn!=None:
        conn.close()