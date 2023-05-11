/*
 * テストの対象引数に関数がある際にmock関数を使ったスパイが活躍する
 */

export const greet = (name: string, callback?: (message: string) => void) => {
  callback?.(`Hello! ${name}`)
}

/*
 * 文字列以外にも配列やオブジェクトを検証する
 */

const config = {
  mock: true,
  feature: { spy: true }
}

export function checkConfig(callback?: (payload: object) => void) {
  callback?.(config)
}
