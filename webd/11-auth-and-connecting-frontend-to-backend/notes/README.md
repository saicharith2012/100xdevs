# Notes

![alt text](image-1.png)

JWTs are note created by encrypting the data,  
For encrypted tokens, the same key previously used to encrypt is needed again to decrypt the token.  

![alt text](image-2.png)

JWTs are created by encoding the data with a secret key, such that they could still be decoded even without the secret key, but can only be verified using the secret key.

the verification of jwts mean, the backend server checks whether the jwt was created by it or not.

![alt text](image-3.png)  

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

![alt text](image-7.png)

![alt text](image-8.png)

But if someone steals a jwt, they can also make requests to the server.

![alt text](image-9.png)

![alt text](image-10.png)