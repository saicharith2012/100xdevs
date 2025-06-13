# NextAuth

## What is next auth?

![alt text](image.png)

## Why not use JWT + localstorage?

**For react + node + express app:**

![alt text](image-1.png)

**In case of Nextjs app:**

![alt text](image-2.png)

Let's say the browser requested for an authenticated route which contains information that needs to be fetched from the database,

Since, the database requests also happen from the nextjs server during the first request itself (thanks to server side rendering) and totally separated from the client,  its not possible to send the jwt from local storage in the request headers. (thus it returns just a empty html bundle.)

![alt text](image-7.png)

![alt text](image-6.png)

And the jwt from localStorage can't be shoved into the first request, since it is happening directly from the browser rather than the javascript of the webpage.

UseEffect can be used to make the requests with jwt from localstorage after the first render (leading to client side rendering), but the first request made to the server still won't be able to read the token from the local storage. (which leads to the waterfalling problem and conflicts the purpose of nextjs to do server side rendering.)

But, **in case of react**, the first request doesn't need to be authenticated since, the rendering happens on the client side anyway (first request only fetches the html and js bundles), thus depending on the subsequent requests for authentication by reading the localstorage. (all of this happens during the first render itself.)

![alt text](image-3.png)

Hence, local storage cannot be used for authentication in nextjs due to its inability to read the token from the browser in the first request itself.

![alt text](image-4.png)

## Authentication using NextAuth

![alt text](image-5.png)

Nextauth is a generic library that supports various providers that expose their OAuth implementation.

![alt text](image-8.png)

## Give NextAuth access to a catch-all

[Reference](https://next-auth.js.org/configuration/initialization#route-handlers-app)

![alt text](image-9.png)

## Credentials Provider

This lets you create your own authentication strategy
For example

- Email + Password

- Phone number

- Login with Metamask

### Steps to follow

![alt text](image-10.png)

![alt text](image-11.png)

![alt text](image-12.png)

![alt text](image-13.png)

![alt text](image-14.png)

![alt text](image-15.png)

![alt text](image-16.png)

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)

Todo:

Callbacks,
how to add DB here,
prisma-adapter,
providers.tsx
