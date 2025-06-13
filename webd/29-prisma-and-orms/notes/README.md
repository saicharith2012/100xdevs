# Prisma and ORMs

## What are ORMs?

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

## Why ORMs?

- **Simpler Syntax**

Converts JS Objects into SQL queries under the hood.

![alt text](image-3.png)

- **Abstraction** that lets you flip the database you are using. Unified API irrespective of the DB.

![alt text](image-4.png)

- **Type Safety/Auto Completion**

![alt text](image-5.png)

- **Automatic Migrations**

![alt text](image-7.png)

To keep track of the migrations (schema/relation changes in the db) and store in the codebase, making it easier to export the design of the database (all the queries needed to reach the current design of the db)

![alt text](image-6.png)

## What is Prisma?

![alt text](image-8.png)

- **Data Model**

![alt text](image-9.png)

- **Automated Migrations**

![alt text](image-10.png)

- **Type Safety**

![alt text](image-11.png)

- **Auto Completion**

![alt text](image-12.png)

## Installing prisma in a node app

![alt text](image-13.png)

## Selecting your database

![alt text](image-14.png)

## Defining your data model

![alt text](image-15.png)

## Generate the client

Generate the client that can be used inside the node app to communicate with the db.

![alt text](image-16.png)

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  firstName: string,
  lastName: string
) {
  const res = await prisma.user.create({
    data: {
      username,
      password,
      firstName,
      lastName,
    },
  });
  console.log(res);
}

insertUser("admin1", "123456", "harkirat", "singh");
```

## Relationships

Prisma lets you define **relationships** to relate tables with each other.

![alt text](image-17.png)

![alt text](image-18.png)

![alt text](image-19.png)
