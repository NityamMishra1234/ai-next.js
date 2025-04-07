import { NextResponse } from 'next/server';
import connectDB from '@/lib/utils/connectDB';
import { loginUser } from '@/lib/controllers/authController';

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  await connectDB();

  try {
    const { email, password }: LoginRequest = await req.json();
    const result = await loginUser(email, password);
    return NextResponse.json(result, { status: 200 });

  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('[LOGIN_ERROR]', error.message);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    console.error('[LOGIN_ERROR]', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 400 });
  }
}
