export class ValidationError extends Error {
}

function checkLength(value: string) {
  if (value.length === 0) {
    throw new ValidationError("1文字以上入力してください")
  }
}
