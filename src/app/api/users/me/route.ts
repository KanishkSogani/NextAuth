import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function POST(request: NextRequest) {
  const userId = await getDataFromToken(request);
  const user = await User.findById(userId).select("-password");

  if (!user) {
    return NextResponse.json(
      { error: "User does not exists" },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "User Found",
    data: user,
  });
}
