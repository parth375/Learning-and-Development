#The following function takes three params a string,one character and one index
#The function will insert the charcter on the string index
def replace_in_string(strs,ch,ind):
    ans=""
    i=0
    while i<len(strs):
        if i==ind:
         ans=ans+ch
        else:
         ans=ans+strs[i] 

        i=i+1

    strs=ans
    return strs
