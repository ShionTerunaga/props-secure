import { createResult, type Result } from "./result";

function isStringArray(value: unknown): value is string[] {
  if (!Array.isArray(value)) {
    return false;
  }

  const findNotString: string | undefined = value.find(
    (val) => typeof val !== "string"
  );

  if (findNotString === undefined) {
    return true;
  }

  return false;
}

export function createSafeTypes<T extends object>(
  raw: unknown,
  allowedKeys: (keyof T)[]
): Result<Partial<T>, Error> {
  if (typeof raw !== "object") {
    return createResult.ng<Error>(new Error("オブジェクトじゃありません。"));
  }

  if (raw === null) {
    return createResult.ng(new Error("nullはダメで〜〜す。"));
  }

  const rawKeys = Object.keys(raw);

  for (const key of rawKeys) {
    if (!isStringArray(allowedKeys)) {
      return createResult.ng(
        new Error("arrowKeysが文字列型の集団になっていません。")
      );
    }

    if (!allowedKeys.includes(key)) {
      return createResult.ng(new Error("存在しないpropsが定義されました。"));
    }
  }

  return createResult.ok(raw);
}
