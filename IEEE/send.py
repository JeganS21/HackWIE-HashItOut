import json
import requests
from cryptography.fernet import Fernet
def sep(s):
    
    c=int(len(s)/4)
    k=c
    data=[]
    i=0
    for j in range(4):
        if (j==3):
            data.append(s[i:])
        else:
            data.append(s[i:c])
            i=i+k
            c=c+k
    return data

def encrypt(message):
    data=[]
    key = Fernet.generate_key()
    data.append(key)
    fernet = Fernet(key)
    encMessage = fernet.encrypt(message.encode())
    data.append(encMessage)
    return data
def sendpost(r)
    data=encrypt(r)
    password=sep(data[1])
    key=sep(data[0])

    url="http://localhost:8080/"
    response=requests.post(url,{
        "password":password[0],
        "key":key[0]
    })
    url="http://localhost:8081/"
    response=requests.post(url,{
        "password":password[1],
        "key":key[1]
    })
    url="http://localhost:8082/"
    response=requests.post(url,{
        "password":password[2],
        "key":key[2]
    })
    url="http://localhost:8083/"
    response=requests.post(url,{
        "password":password[3],
        "key":key[3]
    })
