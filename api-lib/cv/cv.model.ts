import { model, Model, models, Schema } from 'mongoose';

import { CV } from './cv.interface';

const CVSchema: Schema = new Schema<CV>({
  type: {
    type: String,
    required: [true, 'Type should be provided'],
    unique: true,
  },
  main_info: Object,
  profile: Object,
  experience: [Object],
  skills: Object,
  languages: [Object],
  education: [Object],
  created_by: String,
  last_updated_by: String,
});

export const CVModel: Model<CV> = models.CV || model('CV', CVSchema);
