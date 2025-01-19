from Strings import replace_in_string
st=input("Enter Word ")
hint=input("Enter a hint - ")
chances=len(st)+3
str_len=len(st)
ans=''
while(str_len>0):
   ans+='-'
   str_len-=1
print(f" hint -> {hint}")
print(ans)
while chances>0:
  user=input(' Guess? ')
  ind=st.rfind((user))
  if ind==-1:
     chances-=1
  temp2=replace_in_string(ans,user,ind)
  ans=temp2
  print(ans)
  if ans==st:
     break
  
if ans==st:
   print(f" You are Right -> {ans.upper()} is {hint}")
else:
  print(f"Sorry the correct answer is --> {st.upper()}")