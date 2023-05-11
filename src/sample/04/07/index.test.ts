import { greetByTime } from "./index";

describe("greetByTime", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.useRealTimers()
  })

  test("指定時間まつと経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 8, 0, 0))
    expect(greetByTime()).toBe("おはよう")
  })
  test("指定時間まつと経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 12, 0, 0))
    expect(greetByTime()).toBe("こんにちは")
  })
  test("指定時間まつと経過時間をもってresolveされる", () => {
    jest.setSystemTime(new Date(2022, 7, 20, 18, 0, 0))
    expect(greetByTime()).toBe("こんばんは")
  })
})
