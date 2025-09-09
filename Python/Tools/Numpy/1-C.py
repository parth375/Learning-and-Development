# Understand the difference between attribute and function , an attribute just describes your data structure or 
# to give information about your data structure while function is there to perform or do actions on your data structure 

import numpy as np

arr=np.arange(1,13).reshape(3,4)
new_array=arr.astype(float)


arri=np.arange(1, 9, 1.4,dtype=int)
print(arri)