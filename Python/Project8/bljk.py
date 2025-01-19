##BlackJack
import random
print("Hi, Welcome to BlackJack")
def bck():
    user=[]
    comp=[]
    sum_user=0
    sum_comp=0
    while(1):
        choice=input("If you want to get card press y else n ")
        if choice=='y':
            num=random.randint(1,10)
            sum_user+=num
            user.append(num)
            if sum_user>21:
                return "lost"
            elif sum_user==21:
                return "won"
            print(f'Your cards {user} and score {sum_user}')
            num2=random.randint(1,10)
            sum_comp+=num2
            comp.append(num2)
            print(f'Comp cards {comp} and score {sum_comp}')
            if sum_comp>21:
                return "won"
            elif sum_comp==21:
                return "lost"
        else:
            if sum_comp>sum_user:
                return "lost"
            else:
                return "won"

print(bck())
