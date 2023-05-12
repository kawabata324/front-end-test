import { greetByTime } from "./GreetByTime";

describe("greetByTime", () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.useRealTimers()
  })
  test("4時から11時まではおはようが返される", () => {
    jest.setSystemTime(new Date(2020, 1, 2, 4))
    expect(greetByTime()).toBe("おはよう")
    jest.setSystemTime(new Date(2020, 1, 2, 11))
    expect(greetByTime()).toBe("おはよう")
  })
  test("12時から17時まではこんにちはが返される", () => {
    jest.setSystemTime(new Date(2020, 1, 2, 12))
    expect(greetByTime()).toBe("こんにちは")
    jest.setSystemTime(new Date(2020, 1, 2, 17))
    expect(greetByTime()).toBe("こんにちは")
  })
  test("18時から3時まではこんばんはが返される", () => {
    jest.setSystemTime(new Date(2020, 1, 2, 18))
    expect(greetByTime()).toBe("こんばんは")
    jest.setSystemTime(new Date(2020, 1, 2, 3))
    expect(greetByTime()).toBe("こんばんは")
  })
})
