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
    const { email, password } = await req.json();

    const result = await loginUser(email, password);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    console.error('[LOGIN_ERROR]', error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
