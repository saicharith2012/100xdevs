# Backends in NextJS

We know that, both frontend and backend can be implemented inside a nextjs app, thus removing the dependency on express for creating a http server.

![alt text](image.png)

## NextJS is a Full Stack Framework

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

- **Deployment in case of MERN stack**

Two different deployment pipelines.

![alt text](image-4.png)

- **Deployment in case of NextJS**

![alt text](image-5.png)

## Recap of Data Fetching in React

They follow **Water Falling Model**

![alt text](image-6.png)

![alt text](image-7.png)

## Data Fetching in NextJS

![alt text](image-8.png)

If client components are used in next with the useEffect and useState hooks, it still leads to the water falling problem,

![alt text](image-10.png)

![alt text](image-9.png)

In this case, The Googlebot crawls this website only to find a loader, hence ranking it very low on the search results based on the html it reads.

This is the wrong way of using nextjs. Hence, we must do **server side rendering** with **server components** in order to get the benefits of nextjs:

![alt text](image-11.png)

In this case, making the functional component **async** leads to the function to run on the nextjs server itself, hence responding with the final html with data in a single response.

## Loaders in NextJS

![alt text](image-12.png)

![alt text](image-17.png)

In next.js, a loader component can be created within in the route directory with the name "**loading.tsx**".

## API routes in NextJS

![alt text](image-13.png)

![alt text](image-14.png)

**File based routing for api endpoints**
![alt text](image-15.png)

**defining handlers for different methods in the form functions inside route.ts**
![alt text](image-16.png)

## Full Stack todo-app in Nextjs

[todo app repository](https://github.com/saicharith2012/todo-app-next/tree/main)

## Connecting Nextjs backends to Databases

![alt text](image-18.png)

## Better fetches

Instead of sending a request from the server to hit the api endpoints within the same nextjs server, the database calls can be made directly from the functional components.

```Typescript
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function getUserDetails() {
  try {
    const user = await client.user.findFirst({});
    return {
      name: user?.username,
      email: user?.username
    }
  }  catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
        <div className="flex justify-center">
            <div className="border p-8 rounded">
                <div>
                    Name: {userData?.name}
                </div>

                {userData?.email}
            </div>
        </div>
    </div>
  );
}
```

This is possible and safe enough since the client side browser anyway can't access any of the function logic other than
the html and the data rendered inside it from the nextjs server.

> Writing seperate endpoints can be useful when the same endpoint is being used at multiple places within the same application or by different applications that exist on different platforms.

## Singleton Prisma client

During the development phase, when a cloud postgresql database is being used, since the hot reloading is enabled, the 
prisma client declaration is executed again and again, thus creating multiple clients and hence, multiple connections to the database in the background.

Hence, we create a **Singleton** that runs only on the first execution

![alt text](image-19.png)
