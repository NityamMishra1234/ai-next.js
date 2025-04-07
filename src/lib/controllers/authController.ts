import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '@/models/userModel';

const JWT_SECRET = process.env.JWT_SECRET!;

export const signupUser = async (username: string, email: string, password: string) => {
  const existing = await User.findOne({ email });
  if (existing) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });

  return {
    _id: user._id,
    username: user.username,
    email: user.email
  };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error("Invalid credentials");

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

  return {
    token,
    user: {
      _id: user._id,
      username: user.username,
      email: user.email,
    }
  };
};
