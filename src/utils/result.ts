export const RESULT_OK = "ok" as const;
export const RESULT_NG = "ng" as const;

interface Success<T> {
  readonly kind: typeof RESULT_OK;
  value: T;
}

interface Failed<E> {
  readonly kind: typeof RESULT_NG;
  err: E;
}

export type Result<T, E> = Success<T> | Failed<E>;

export const createResult = {
  ok: <T>(value: T): Success<T> => {
    return {
      kind: RESULT_OK,
      value,
    };
  },
  ng: <E>(err: E): Failed<E> => {
    return {
      kind: RESULT_NG,
      err,
    };
  },
};
