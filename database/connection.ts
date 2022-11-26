import { connect } from 'mongoose';

if (!process.env.DATABASE_URL) {
  throw new Error('Please add your DATABASE_URL to env file');
}

const url = process.env.DATABASE_URL;

export const connectToDatabase = () => connect(url);
