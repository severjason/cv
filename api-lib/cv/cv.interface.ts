import type { CVData } from '@/types';

export interface CV extends Document, CVData {
  type: string;
  created_by: string;
  last_updated_by: string;
  created_at: Date;
  updated_at: Date;
}
