import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`
}))

test('さよならを返す(本来の実装ではない', () => {
  const message = `${sayGoodBye("Taro")} See you.`
  expect(message).toBe("Good bye, Taro. See you.")
})

test('挨拶が未実装(本来の実装ではない', () => {
  expect(greet).toBe(undefined)
})
