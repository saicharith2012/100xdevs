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
    const { username, email, password, city, country, street, pincode } =
      req.body;

    // const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;

    // console.log(insertQuery);

    // await pgClient.query(insertQuery);

    // begin the transaction
    await pgClient.query("BEGIN");

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
    const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;

    const insertResponse = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]); // it returns the user id

    const user_id = insertResponse.rows[0].id;

    await new Promise((x) => setTimeout(x, 100 * 1000)); // stop the control on this line for 100s

    // insert address
    await pgClient.query(addressInsertQuery, [
      city,
      country,
      street,
      pincode,
      user_id,
    ]);

    await pgClient.query("COMMIT");

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

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  // bad approach ----
  // const query1 = `SELECT * FROM users WHERE id=$1`;
  // const response1 = await pgClient.query(query1, [id]);

  // const query2 = `SELECT * FROM addresses WHERE user_id=$1`;
  // const response2 = await pgClient.query(query2, [id]);

  // res.json({
  //   user: response1.rows[0],
  //   address: response2.rows,
  // });

  const joinQuery = `SELECT u.id, u.username, u.email, a.city, a.country, a.street, a.pincode
FROM users u JOIN addresses a ON u.id = a.user_id
WHERE u.id = $1;`;

  const response = await pgClient.query(joinQuery, [id]);

  const data = response.rows;

  res.json({
    data,
  });
  
});
