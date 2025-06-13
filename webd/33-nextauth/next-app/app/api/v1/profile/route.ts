import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function GET(req: NextRequest) {
  const jwtSecret = process.env.JWT_SECRET || "default_secret";
  const token = req.headers.get("authorization") || "";
  const decodedToken = jwt.verify(token, jwtSecret);

  const userId = (decodedToken as JwtPayload).userId;
  return NextResponse.json({
    userId,
  });
}
