export const ApiErrors = {
  METHOD_IS_NOT_ALLOWED: (method?: string) => `Method ${method || ''} is not allowed`,
  DOCUMENT_NOT_FOUND: (modelName: string) => `${modelName} not found`,
};
