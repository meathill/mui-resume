export type ApiResponse<T> = {
  code: number;
  message?: string;
  data?: T;
  meta?: {
    total?: number;
  };
};
