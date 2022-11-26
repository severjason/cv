import { CVModel } from './cv.model';
import { CV } from './cv.interface';
import { connectToDatabase } from '@/database/connection';
import { throwHttpException } from '@/api-lib/utils/throw-http-exception.util';
import { ApiErrors } from '@/api-lib/constants/api-errors.constant';

class CVService {
  public async getCvData(): Promise<CV | null> {
    await connectToDatabase();

    const doc = await CVModel.findOne({ type: 'current' });
    if (!doc) {
      CVService.throwNotFoundException();
    }
    return doc;
  }

  public async getCvDataJSON(): Promise<CV | null> {
    return JSON.parse(JSON.stringify(await this.getCvData()));
  }

  private static throwNotFoundException() {
    throwHttpException({
      message: ApiErrors.DOCUMENT_NOT_FOUND(CVModel.modelName),
      status: 404,
    });
  }
}

export default new CVService();
