import { NextApiRequest, NextApiResponse } from 'next';

import { ApiErrors } from '@/root/api-lib/constants/api-errors.constant';

export const onNoMatchMiddleware = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(405).json({
    message: ApiErrors.METHOD_IS_NOT_ALLOWED(req?.method),
  });
};
