import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  ...jest.requireActual("./greet"),
  sayGoodBye: (name: string) => `Good bye, ${name}`
}))

test("挨拶を返す", () => {
  expect(greet("Taro")).toBe("Hello! Taro.")
})

test("さよならを返す（本来の実装ではない）", () => {
  expect(sayGoodBye("Taro")).toBe("Good bye, Taro")
})
