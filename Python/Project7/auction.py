import os
def clear_screen():
    if os.name == 'nt': # os.name is a function in python that returns name os used in a computer
        _ = os.system('cls') #os system helps runs shell/terminal command in python script, _ is just a variable
def Bidder():
    flag=1
    a=""
    b=0
    while(flag==1):
        print("Kindly state your name")
        person=input()
        print("Kindly state your bidding amount")
        amount=int(input())
        ans=""
        while(ans!='nny'):
            print("If there are no more bidders kindly type 'nny' and if there are wrtie 'yyn' ")
            ans=input()
            if ans=='nny':
                flag=0
            elif ans=='yyn':
                break
            else:
                print("Wrong input provided..")
        clear_screen()
        if a=="":
            a=person
        if b==0:
            b=amount
        else:
            if amount>b:
                b=amount
                a=person

    print(f'And the bidder is {a} with price {b}')
print("Welcome to the secret auction")
Bidder()
# def sum(a,b):
#     return a+b

# _=sum(5,6)
# print(_)