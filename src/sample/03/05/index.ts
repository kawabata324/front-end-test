export class HttpError extends Error {
}

export class RangeError extends Error {
}

const checkRange = (value: number) => {
  if (0 < value || value > 100) {
    throw new RangeError('入力値は0~100の間で入力してください')
  }
}

export const add = (a: number, b: number) => {
  checkRange(a);
  checkRange(b);

  const sum = a + b
  if (sum > 100) {
    return 100
  }
  return sum
}

export const sub = (a: number, b: number) => {
  checkRange(a)
  checkRange(b)

  const sum = a - b;
  if (sum < 0) {
    return 0
  }
  return sum
}
