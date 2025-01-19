import random
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']
print("Python Password Generator, Here we Generate #Password#")
num=int(input("How many numbers you want in your password. Choose between 0 - 9 "))
sym=int(input("How many symbols you want in your password. Choose between 0 - 7 "))
total=(2*(num+sym))
ls1=random.sample(symbols,sym)
ls2=random.sample(numbers,num)
ls3=random.sample(letters,total)
temp=(ls1+ls2+ls3)
random.shuffle(temp)
password=''
for it in temp:
    password+=it

print(f'Your Password is --->s {password}')


