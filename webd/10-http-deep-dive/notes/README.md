# Authentication

![alt text](image.png)

![alt text](image-1.png)

For every sign up/Sign in, each user is assigned with a token,  
and for every future request, this token is included in the request header, such that the server authenticates the user based on this token.

## Auth Workflow

All the users send request to the same endpoint, but the server identifies each user using their token and sends the response relevant to the user.

![alt text](image-2.png)

![alt text](image-3.png)

For authenticated endpoints, where the server fulfills the user's request only if they are authorized:  
generally, these auth tokens are stored in the request headers, in authorization or cookies, so that the request handlers in the server authenticates by parsing the token from the request headers and performs their specific action.

## Tokens vs JWTs

### stateful tokens

![alt text](image-4.png)

for every authenticated request, the server looks up the database to check if the token in the request header matches any token in the database

![alt text](image-6.png)

### JWTs

create tokens based on the user credentials and send them to the user after sign in,
and while handling the authenticated requests,the jwt token that is parsed form the request headers is used to authenticate the user based on the data stored in the jwt.

![alt text](image-7.png)

Since JWT is stateless and the data required to authenticate is what produces the jwt, the server just needs the jwt it created and assigned to authenticate the user and it saves one round trip b/w the server and database while handling an authenticated request. (jwt would not contain passwords.)

The JWTs could be stored both inside a authorization header, or cookies.

![alt text](image-8.png)

a JWT secret variable is used as key to create or sign a jwt and later to verify and decode it to get authentication data from it.

![alt text](image-9.png)

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

jwts vs cookies

![alt text](image-15.png)
 