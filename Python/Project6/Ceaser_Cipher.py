## Hi welcome to the Ceaser_Cipher 
## Enter the text that you want to either encrypt to decrypt
## Kindly on enetr aplhabets or characters
## Don't enter any other things, like numbers or symbols etc.
def ceaser_cipher(text,shift,technique):
    ans=''
    for it in text:
            if it==' ' :
             ans+=' '
            elif it>='a' and it<='z' or it>='A' and it<'Z' :
                if technique=='ENCRYPT':
                    ind=alphabets.index(it)
                    s_ind=(shift+ind)
                    if(s_ind>25):
                        s_ind=(s_ind-26)
                        ans+=alphabets[s_ind]
                    else:
                        ans+=alphabets[s_ind]
                elif technique=='DECRYPT':
                    ind=alphabets.index(it)
                    s_ind=(ind-shift)
                    if(s_ind<0):
                        s_ind=(26+s_ind)
                        ans+=alphabets[s_ind]
                    else:
                        ans+=alphabets[s_ind]
            else:
                ans="Error wrong Input"
                break
    print(ans)
 
alphabets=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
text=input("Eneter the text -> ").lower()
technique=input("Encrypt or Decrypt -> ").upper()
shift=int(input("Enter the shift number -> "))
ceaser_cipher(text,shift,technique)

