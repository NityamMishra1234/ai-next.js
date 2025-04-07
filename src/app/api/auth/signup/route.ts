import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/utils/connectDB';
import { signupUser } from '@/lib/controllers/authController';

interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const body: SignupRequest = await req.json();
    const { username, email, password } = body;

    const user = await signupUser(username, email, password);
    return NextResponse.json({ user }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

