import dotenv from "dotenv";

dotenv.config();

const postgresUri = process.env.POSTGRES_DB_URI;
const port = process.env.PORT

export { postgresUri, port };
