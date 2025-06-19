export type StrictPropertyCheck<T, TExpected, TError extends string> = T &
  (Exclude<keyof T, keyof TExpected> extends never ? {} : TError);
