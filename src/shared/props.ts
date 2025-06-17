export type StrictPropertyCheck<T, TExpected, TError> = T &
  (Exclude<keyof T, keyof TExpected> extends never ? {} : TError);

interface Sample {
  a: number;
}
