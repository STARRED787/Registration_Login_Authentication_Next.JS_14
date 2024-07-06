import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();
export async function POST(request: NextRequest) {
  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message }), { status: 500 };
  }
}
