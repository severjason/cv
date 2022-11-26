import { NextApiRequest, NextApiResponse } from 'next';

export const handleOptionsRequest = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'OPTIONS' && process.env.NODE_ENV === 'development') {
    return res.status(200).send('ok');
  }
};
