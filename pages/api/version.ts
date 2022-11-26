// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import pkg from '@/root/package.json';

type Data = {
  version: string;
};

/**
 * returns all apps
 * @param req
 * @param res
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ version: pkg.version });
}
