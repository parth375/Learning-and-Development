def fake_db_check()->bool:
    try:
       return True
    except:
        print('Error connecting to DB')