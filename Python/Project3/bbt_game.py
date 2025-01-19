import random
import time
print("Welcome to BBT's ROCK....PAPER...SCISSORS")
time.sleep(2)
print("The rules are simple.")
time.sleep(2)
print("There are 3 rounds")
time.sleep(2)
print("Each round you will get a set of weapons")
time.sleep(2)
print("In the 1st round you have to choose between ROCK, PAPER AND SCISSORS")
time.sleep(2)
print("If you win, you will be advance to the further rounds ")
time.sleep(2)
print("The rules of the next rounds will be told as you advance")
time.sleep(2)
print("GOOD LUCK SOLDIER I hope to see you in the END")

weapon={
      0:"ROCK",
      1:"PAPER",
      2:"SCISSOR",
      3:"LIZARD",
      4:"SPOCK"
   }
def rps_function(user,computer,moves):
    if user==0 and (computer==4 or computer==2) :
       
       return True
    
    else:
       
       return False
    
    if user==1 and (computer==0 or computer==5):
         
         return True
    
    else: 
     
       return False  
       
    if user==2 and (computer==4 or computer==1):

        return True
       
    else:
        return False
       
    if user==3 and (computer==5 or computer==1):
       
        return True
       
    else:
       return False
       
    if user==4 and (computer==0 or computer==2):
       
        return True
       
    else:  
       return False

print("ROCK...PAPER...SCISSORS")
user_choice=int(input("CHOOSE. "))
if user_choice>2 or user_choice<0:
    print("You CAN'T TYPE THAT SOLDIER, TRY AGAIN",)
else:
  print(f'You have selected...{weapon[user_choice]}...as your weapon' )
  round1=[0,1,2]
  computer_choice=random.choice(round1)
  print(f'The Opponent have selected...{weapon[computer_choice]}...as its weapon' )
  if(rps_function(user_choice,computer_choice,weapon)==True):
     time.sleep(4)
     print("You Advance To NEXT ROUNNND")
     time.sleep(3)
     print("Congraulation, In this round one more weapon is added to the list called 'LIZARD' which represents number 3.")
     time.sleep(3)
     print("The rules are same as were in the 1st round with one additional weapon so choose wisely")
     time.sleep(3)
     print("ROCK...PAPER...SCISSORS...LIZARD")
     user_choice=int(input("CHOOSE. "))
     if user_choice>3 or user_choice<0:
        print("You CAN'T TYPE THAT SOLDIER, TRY AGAIN")
     else:
        print(f'You have selected...{weapon[user_choice]}...as your weapon' )
        round2=[0,1,2,3]
        computer_choice=random.choice(round2)
        print(f'The Opponent have selected...{weapon[computer_choice]}...as its weapon' )
        if(rps_function(user_choice,computer_choice,weapon)==True):
           time.sleep(4)
           print("You Advance to NEXT ROUNNND")
           time.sleep(3)
           print("Well you made it to the end. This round weapon 'SPOCK' which represents number 4 is added your list.")
           time.sleep(3)
           print("The End is near Choose wisely")
           time.sleep(3)
           print("ROCK...PAPER...SCISSORS...LIZARD...SPOCK")
           time.sleep(3)
           user_choice=int(input("CHOOSE. "))
           if user_choice>4  or user_choice<0: 
                print("You CAN'T TYPE THAT SOLDIER, TRY AGAIN")
           else:
                print(f'You have selected...{weapon[user_choice]}...as your weapon' )
                round3=[0,1,2,3,4]
                computer_choice=random.choice(round3)
                print(f'The Opponent have selected...{weapon[computer_choice]}...as its weapon' )
                if(rps_function(user_choice,computer_choice,weapon)==True):
                    time.sleep(5)
                    print("WELL DONE SOLDIER")
                else:
                    time.sleep(5)
                    print("GET UP TRY AGAIN SOLDIER")
        else:
            time.sleep(4)
            print("TRY AGAIN SOLDIER")
  else:
      time.sleep(4)
      print("TRY AGAIN SOLDIER")