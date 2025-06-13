# Server Side Rendering and Next.js

## NextJS intro

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-3.png)

![alt text](image-2.png)

Hence, Generally React is not used to build the landing pages when the website needs to be highly SEO optimised.

![alt text](image-4.png)

## SEO Optimization

![alt text](image-5.png)

![alt text](image-6.png)

Since the google crawler can't read the content rendered by react, the website is not higly search engine optimized, Hence, won't have good ranking in the search results.

## Waterfalling problem

![alt text](image-7.png)

![alt text](image-8.png)

![alt text](image-9.png)

How Nextjs performs the same request:

![alt text](image-10.png)

What **Client Side Rendering** looks like:

![alt text](image-13.png)

In React frontend, during production, the frontend is supplied in the form of bundles, i.e. the frontend server builds the code and creates a distribution folder. Hence, it acts more like a **Content Delivery network** that serves the html, css and js unlike a traditional http server. Hence, the React web apps can be scaled via CDNs and inexpensive to run in production.

Unlike React, NextJs does **Server Side Rendering:**

Given a seperate backend is being used instead of Nextjs offering,
![alt text](image-11.png)

The nextjs server fetches the data from the backend and renders the html in itself and sends it to the client.

Hence nextjs frontend server in production acts like a traditional server running somewhere by itself and listening to the incoming requests.

When nextjs itself is being used for backend too.
![alt text](image-14.png)

## NextJS Offerings

![alt text](image-15.png)

## Bootstrapping a NextJS App

![alt text](image-16.png)

## NextJS Directory structure

![alt text](image-17.png)

## Routing in nextjs

File based routing is implemented in nextjs.

![alt text](image-18.png)

## Server side rendering

![alt text](image-19.png)

![alt text](image-20.png)

- If the data is being fetched in the **React** way using **useEffect**, the data won't render on the server side, returning html containing no data. And only after sometime, the changes inside useEffect render. Hence, we use **Client components**, for such pages.

## Layouts

![alt text](image-21.png)
