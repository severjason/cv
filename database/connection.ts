import { connect } from 'mongoose';

export const connectToDatabase = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('Please add your DATABASE_URL to env file');
  }
  return connect(url, { serverSelectionTimeoutMS: 5000 });
};
