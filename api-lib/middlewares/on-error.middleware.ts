import { NextApiRequest, NextApiResponse } from 'next';

// oxlint-disable-next-line typescript/no-explicit-any
export const onErrorMiddleware = (err: any, req: NextApiRequest, res: NextApiResponse) => {
  res.status(err?.status || err?.code || 400).json({
    message: err?.message || 'Unknown error',
  });
};
