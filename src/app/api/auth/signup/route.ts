// app/api/auth/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/utils/connectDB';
import { signupUser } from '@/lib/controllers/authController';

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { username, email, password } = await req.json();
    const user = await signupUser(username, email, password);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
