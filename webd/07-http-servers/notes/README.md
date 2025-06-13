# Notes

external libraries let us create http servers in our backend.

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

This model of the client communicating with the server is called the request-response model.

![alt text](image-4.png)

![alt text](image-5.png)

![alt text](image-6.png)

## Domain Name/ IP

![alt text](image-7.png)

![alt text](image-8.png)

google.com could resolve to different ip addresses for different people based on their location.

![alt text](image-9.png)

![alt text](image-10.png)
---> hosted on the same machine (same ip addresses)

![alt text](image-11.png)

to deploy a website:

1. rent a server (aws) ---> gives the ip address

2. Buy a Domain (Godaddy) ---> www.website_name.com

3. Point the domain name to the server ip address.

## Ports

![alt text](image-12.png)

By using ports, multiple websites could be run on the same server.

Reverse proxies (implemented using nginx) can be used to direct requests for different processes to the same port of an IP address and then route those requests to the appropriate processes internally.

![alt text](image-13.png)

Generally websites are deployed on port 443. (HTTPS)

port 80 for (HTTP)

![alt text](image-14.png)

## Methods

![alt text](image-15.png)

![alt text](image-16.png)

Handlers are written for each type of request method, if a request handler is not found for a particular method, it returns an error.

## Response

![alt text](image-19.png)

![alt text](image-20.png)

![alt text](image-17.png)

![alt text](image-18.png)

## Status Codes

![alt text](image-21.png)

![alt text](image-22.png)

![alt text](image-23.png)

## Body

![alt text](image-24.png)

![alt text](image-25.png)

## Routes

![alt text](image-26.png)

a http server can be created by using the already existing library like expressjs. (underneath it, the http protocol is already implemented, we can used its library functions to create the server.)

![alt text](image-28.png)
browsers by default forward the requests to their default ports.

![alt text](image-29.png)
