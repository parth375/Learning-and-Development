print("Classes")
#while learning or doing anything or any action phele dekho ki kon kon si cheezon ka dhyaan rakhna hai.
#aur dhyaan kahan se aata hai woh aapki practice aur apki learing aur jo aapko sikha raha hai aur aapk kay samajh rahe ho 
#aapko kaya samjhaya jaa raha hai aap kya samajh rahe ho dhyaan wohi se aana hai jo aap practice karoge wohi dhyaan hai.

#private members are those which can't be access outside the class
#protected members are those which can only be access by inherited class
#public members are those which can be access by all.

class Worker:
    def show(self):
        print(f'Age is {self.ag}')

class Son(Worker): #inheritance
    def add(self):
        print(self.ag)


class Car:
    
    def __init__(self,model,color,city):
        self.md=model
        self.col=color
        self.cy=city

    def show(self):
        print(f'Car Model {self.md}')

cr=Car("Tata","Red","GZB")
cr.show()