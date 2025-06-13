import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  // ideally the username and password needs to be checked in the DB
  // and the jwt needs to be returned only if they are valid.

  const body = await req.json();

  const username = body.username;
  const password = body.password;

  // check in the db.
  console.log(`${username}, ${password}`)

  const userId = 1;

  const jwtSecret: string = process.env.JWT_SECRET || "default_secret";

  const token = jwt.sign(
    {
      userId,
    },
    jwtSecret
  );

  return NextResponse.json({
    token,
    message: "You are signed in.",
  });
}
