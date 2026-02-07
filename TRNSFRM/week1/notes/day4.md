PYTHON PACKAGE ERROR?

WRONG PATH 

I WAS TRYING TO RUN THE PYTHON SCRIPT IT WAS SHOWING PATH ERROR WHY?

HOW PYTHON RUNS A FILE OR A PYTHON SCRIPT

TWO PATHS ONE IS -> WHERE PYTHON EXE IS PRESENT WHEN YOU INSTALL PYTHON THIS IS THE PATH YOU SELECT
                       SECOND -> THIS IS THE OS PATH HERE YOU NEED TO ADD THE PYTHON EXE PATH SO IT KNOW WHERE PYTHON IS SO YOU CAN EXCUTE IT

THE SAME THING HAPPENS IN PYTHON WHEN YOU TRY TO RUN A PYTHON SCRIPT IT SO WHEN YOU TRY TO RUN IT FIRST THE PATH IS STORED IN SYS LIBRARY (PYTHON DEFAULT)
IT’S ARRAY WHERE THE PATH FROM THE PYTHON FILE IS RUN IS APPENDED THEN THE IMPORTS THAT YOU HAVE PUT IN THE SCRIPT IS CHECKED IN THE FOLDER WHERE YOUR
PYTHON SCRIPT EXISTS IF THERE ARE THERE THEN SCRIPTS RUN IF THEY ARE IN SOME OTHER FOLDER GIVES IMPORT ERROR

TO RESOLVE THIS ERROR RUN IT IN A MODULE FORMAT FOR THAT INIT.PY SHOULD BE PRESENT SO THAT IT’S RECOGNISED AS A PACKAGE BY PYTHON  THAT COMMAND IS :

python3 -m app.models.user  why app is the starting point because it has the init.py file to so the folder should have init.py to run the command or else import error.



SQL ORM

DBAPI -> This is the language through which python talks to DB
DBAPI-> Is the Driver which is built on these and talks on behalf od python
EX -> Posgtres<-----Pycopg2(DBAPI)------->Python


ORM is just an abstraction layer over the real SQL query beneath it also sql query is running just it's forming that
by itself,

Second ORM also first talks to DBAPAI driver
the first step for orm is is creating a engine through your Database connection url this creates a connection pool


DEPENDENCY INJECTION


