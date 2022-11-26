import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

import { onErrorMiddleware } from '@/root/api-lib/middlewares/on-error.middleware';
import { onNoMatchMiddleware } from '@/root/api-lib/middlewares/on-no-match.middleware';
import { handleOptionsRequest } from '@/root/api-lib/utils/handle-options-request.util';
import config from '@/config';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
  const response = await fetch(`${config.NEXT_PUBLIC_APP_URL}/data.json`);
  const data = await response.json();
  res.status(200).json(data);
});

router.all(handleOptionsRequest);

export default router.handler({
  onError: onErrorMiddleware,
  onNoMatch: onNoMatchMiddleware,
});
