import { ApiErrors } from '@/api-lib/constants/api-errors.constant';
import { throwHttpException } from '@/api-lib/utils/throw-http-exception.util';
import { connectToDatabase } from '@/database/connection';

import { CV } from './cv.interface';
import { CVModel } from './cv.model';

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
