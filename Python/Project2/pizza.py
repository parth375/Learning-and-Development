print("Welcome to Python Pizza Express \--/")
amount=0
price_small=15      
price_medium=20
price_large=25
pepperoni_small=2
pepperoni_other=3
extra_cheese=1
try:
    size=input("Enter the size of your pizza [Small],[Medium] or [Large] | ")
    if size == 'Small':
        amount+=price_small
    elif size == 'Medium':
        amount+=price_medium
    elif size == 'Large':  
        amount+=price_large
    else:
        print("Kindly Enter the size name correctly")
except Exception as e:
    print("Error",e)
try:
    topping=input("Do you want Pepperoni on your pizza. Enter Y or N | ")
    if topping =='N':
        amount+=0
    elif topping =='Y' and size =='Small':
        amount+=pepperoni_small
    elif topping=='Y' and size=='Medium' or size=='Large':
        amount+=pepperoni_other
    else:
        print("Kindly enter the input correctly")
except Exception as e:
    print("Error",e)
try:
    cheese=input("Do you want extra cheese on your pizza. Enter Cheese | ")
    if cheese =='Cheese':
        amount+=extra_cheese
    else:
        print("Kindly check your input correctly")
except Exception as e:
    print("Error",e)

print(f'Here is your final bill {amount}. Enjoy your pizza.')
