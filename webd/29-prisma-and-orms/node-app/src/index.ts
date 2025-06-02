import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const client = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "query",
    },
  ],
});

async function createUser() {
  const user = await client.user.create({
    data: {
      username: "klrahul",
      password: "343423",
      age: 33,
      city: "Bangalore",
    },
  });

  console.log(user);
}

async function deleteUser() {
  await client.user.delete({
    where: {
      id: 1,
    },
  });
}

async function updateUser() {
  await client.user.update({
    where: {
      id: 1,
    },
    data: {
      username: "cherith",
    },
  });
}

async function findUser() {
  const user = await client.user.findFirst({
    where: {
      id: 2,
    },
    include: {
      todo: true,
    },
  });

  console.log(user);
}

app.get("/users", async (req, res) => {
  const users = await client.user.findMany();
  res.json({
    users,
  });
});

// createUser();
// updateUser()
// deleteUser()
findUser();

app.listen(3000);
