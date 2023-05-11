import { checkConfig, greet } from "./index";

test("モック関数は実行された", () => {
  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toBeCalled()
})

test("モック関数は実行されていない", () => {
  const mockFn = jest.fn();
  expect(mockFn).not.toBeCalled()
})

test("モック関数は実行された回数を記録している", () => {
  const mock = jest.fn()
  mock()
  expect(mock).toHaveBeenCalledTimes(1)
  mock()
  expect(mock).toHaveBeenCalledTimes(2)
})

test("モック関数は関数の中でも実行できる", () => {
  const mockFn = jest.fn()

  function greet() {
    mockFn()
  }

  greet()
  expect(mockFn).toHaveBeenCalledTimes(1)
})

test("モック関数は実行時の引数を記録している", () => {
  const mockFn = jest.fn()
  const greet = (message: string) => {
    mockFn(message)
  }
  greet("Hello")
  expect(mockFn).toHaveBeenCalledWith("Hello")
})

test("モック関数はテスト対象の引数として使用できる", () => {
  const mockFn = jest.fn()
  greet("Jiro", mockFn)
  expect(mockFn).toHaveBeenCalledWith("Hello! Jiro")
})

test("モック関数は実行引数のオブジェクト検証ができる", () => {
  const mockFn = jest.fn()
  checkConfig(mockFn)
  expect(mockFn).toHaveBeenCalledWith({
    mock: true,
    feature: { spy: true }
  })
})

test("モック関数は実行引数の一部のオブジェクト検証ができる", () => {
  const mockFn = jest.fn()
  checkConfig(mockFn)
  expect(mockFn).toHaveBeenCalledWith(
    expect.objectContaining({
      feature: { spy: true }
    })
  )
})
