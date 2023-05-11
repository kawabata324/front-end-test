import { greet } from "./greet";

describe("挨拶", () => {
  describe("greet", () => {
    test("挨拶を返す(本来の実装通り）", () => {
      expect(greet("Taro")).toBe("Hello! Taro.")
    })
  })
})
