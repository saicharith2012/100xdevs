import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "charith",
    email: "charith@gmail.com",
    address: {
      houseNumber: "322",
      city: "San Francisco",
      state: "California",
    },
  });
}

export function POST() {
  return NextResponse.json({
    name: "charith",
    email: "charith@gmail.com",
    address: { 
      houseNumber: "322",
      city: "San Francisco",
      state: "California",
    },
  });
}

export function PUT() {
  return NextResponse.json({
    name: "charith",
    email: "charith@gmail.com",
    address: {
      houseNumber: "322",
      city: "San Francisco",
      state: "California",
    },
  });
}

export function DELETE() {
  return NextResponse.json({
    name: "charith",
    email: "charith@gmail.com",
    address: {
      houseNumber: "322",
      city: "San Francisco",
      state: "California",
    },
  });
}
