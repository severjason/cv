export class HttpException extends Error {
  public status: number;

  constructor(message: string, status: number) {
    super(message);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.status = status;
  }
}
