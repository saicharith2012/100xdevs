import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createDummyUsers() {
  let user = await client.user.create({
    data: {
      username: "ram",
      age: 22,
      password: "3432423",
      city: "delhi",
      todo: {
        create: {
          description: "Go to gym.",
          title: "gym",
          done: false,
        },
      },
    },
  });
}

createDummyUsers();
