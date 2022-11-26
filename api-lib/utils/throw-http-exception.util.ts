import { HttpException } from './http-exception.util';

interface ThrowHttpExceptionParams {
  message?: string;
  status?: number;
}

export const throwHttpException = ({ message = 'Unknown HTTP exception', status = 400 }: ThrowHttpExceptionParams) => {
  throw new HttpException(message, status);
};
