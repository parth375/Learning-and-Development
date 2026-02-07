PATH PARAMETERS

These are those paramters which are passed in a URL

from fastapi import FastAPI

app=FastAPI()

@app.get("/{user_id}")
def function(user_id:int):
pass

@app.get("/{user_id}/{age}")
def function(user_id:int, age:str):
pass


Query Paramters

Whatever in a URL is passed and not a part of path parameter is query parameter

@app.get("/")
def function(age:str|None):
pass


Query Paramters you can put up an extra validation in query by defining the maximum length of the query
@app.get("/")
def func(count:Annotated[int|None,Query(max_length=50)]=None):
