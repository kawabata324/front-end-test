describe('真偽値の検証', () => {
  test("真の検証", () => {
    expect("1").toBeTruthy()
    expect(1).toBeTruthy()
    expect(true).toBeTruthy()
    expect(0).not.toBeTruthy()
    expect("").not.toBeTruthy()
    expect(false).not.toBeTruthy()
  })

  test("偽の検証", () => {
    expect(0).toBeFalsy()
    expect("").toBeFalsy()
    expect(false).toBeFalsy()
    expect(1).not.toBeFalsy()
    expect("1").not.toBeFalsy()
    expect(true).not.toBeFalsy()
  })
})

describe("null, undefinedの検証", () => {
  test("null, undefinedの検証", () => {
    expect(null).toBeFalsy()
    expect(undefined).toBeFalsy()
    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect(undefined).not.toBeDefined()
  })
})

describe("数値の検証", () => {
  const value = 2 + 2
  test("検証値は期待値と等しい", () => {
    expect(value).toBe(4)
    expect(value).toEqual(4)
  })
  test("検証値は期待値よりも大きい", () => {
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(4)
  })
  test("検証値は期待値よりも小さい", () => {
    expect(value).toBeLessThan(5)
    expect(value).toBeGreaterThanOrEqual(4)
  })
})

describe("小数の検証", () => {
  test("小数計算は正確ではない", () => {
    expect(0.1 + 0.2).not.toBe(0.3)
  })
  test("推定小数点以下n桁までを比較する", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15)
    expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16)
  })
})

describe("文字列の検証", () => {
  const str = 'こんにちは世界'
  test("検証値は、期待値と等しい", () => {
    expect(str).toBe('こんにちは世界')
    expect(str).toEqual('こんにちは世界')
  })
  test("toContain", () => {
    expect(str).toContain('世界')
    expect(str).not.toContain('さよなら')
  })
  test("toMatch", () => {
    expect(str).toMatch(/こんにちは/)
    expect(str).not.toMatch(/さよなら/)
  })
  test("toHaveLength", () => {
    expect(str).toHaveLength(7)
    expect(str).not.toHaveLength(8)
  })
})


describe("オブジェクトに含まれる文字列の検証", () => {
  const str = "こんにちは世界"
  const obj = { status: 200, message: str }
  test("stringContaining", () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringContaining("世界")
    })
  })
  test("stringMatching", () => {
    expect(obj).toEqual({
      status: 200,
      message: expect.stringMatching(/世界/)
    })
  })
})

describe("配列の検証", () => {
  const tags = [ "Jest", "Storybook", "Playwright", "React", "Next.js" ]
  test("toContain and toHaveLength", () => {
    expect(tags).toContain("Jest")
    expect(tags).toHaveLength(5)
  })
  const article1 = { author: "taro", title: "TestingNext.js" };
  const article2 = { author: "jiro", title: "Storybookplayfunction" };
  const article3 = { author: "hanako", title: "VisualRegressionTesting" };
  const articles = [ article1, article2 ];

  test("toContainEqual", () => {
    expect(articles).toContainEqual({ author: "taro", title: "TestingNext.js" })
  })
  test("arrayContaining", () => {
    expect(articles).toEqual(expect.arrayContaining([ article1, article2 ]))
  })
})

describe("オブジェクトの検証", () => {
  const author = { name: "taroyamada", age: 28 }
  test("toMatchObject", () => {
    expect(author).toMatchObject({ name: "taroyamada", age: 28 })
    expect(author).toMatchObject({ name: "taroyamada" })
    expect(author).not.toMatchObject({ gender: "man" })
    expect(author).not.toMatchObject({ name: "kawabataharuki" })
  })
  test("toHaveProperty", () => {
    expect(author).toHaveProperty("name")
    expect(author).toHaveProperty("age")
  })

  const article = { title: "TestingwithJest", author: { name: "taroyamada", age: 38 }, };

  test("ネストされたオブジェクトに使う", () => {
    expect(article).toEqual({
      title: "TestingwithJest",
      author: expect.objectContaining({ name: "taroyamada" })
    })
    expect(article).toEqual({
      title: "TestingwithJest",
      author: expect.not.objectContaining({ gender: "man" })
    })
  })
})
