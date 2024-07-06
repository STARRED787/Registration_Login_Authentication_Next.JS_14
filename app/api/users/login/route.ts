import bcrypt from "bcryptjs";
import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/userModels";
import { NextRequest, NextResponse } from "next/server";
