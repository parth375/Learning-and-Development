def fake_db_check()->bool:
    try:
       return False
    except:
        print('Error connecting to DB')