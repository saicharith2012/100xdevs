import express from "express";
import { Client } from "pg";
import { postgresUri, port } from "./config";

const app = express();

app.use(express.json());

const pgClient = new Client(postgresUri);

async function connectDB() {
  await pgClient.connect();
}

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

    // console.log(insertQuery);

    // await pgClient.query(insertQuery);

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;

    await pgClient.query(insertQuery, [username, email, password]);

    res.json({
      message: "signedup successfully.",
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: "Error while signing up!",
    });
  }
});
