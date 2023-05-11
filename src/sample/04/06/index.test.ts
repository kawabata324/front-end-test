import { ArticleInput } from "../../../04/fetchers/type";
import * as Fetchers from "../../../04/fetchers"
import { httpError } from "../03/fetchers/error";
import { checkLength } from "../../../04/06";
import { postMyArticleData } from "../../../04/fetchers/fixtures";
import { postMyArticle } from "../../../04/fetchers";


jest.mock("../../../04/fetchers")
const mockPostMyArticle = (input: ArticleInput, status = 200) => {
  if (status >= 300) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError)
  }
  try {
    checkLength(input.title)
    checkLength(input.body)
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockResolvedValueOnce({ ...postMyArticleData, ...input })
  } catch (e) {
    return jest
      .spyOn(Fetchers, "postMyArticle")
      .mockRejectedValueOnce(httpError)
  }
}

function inputFactory(input?: Partial<ArticleInput>): ArticleInput {
  return {
    tags: [ "testing" ],
    title: "Typescriptを使ったテストの書き方",
    body: "テストを書く時、Typescriptを使うことで、テストの保守性が向上します.",
    ...input
  }
}

test("バリデーションに成功した時、成功レスポンスが返る", async () => {
  const input = inputFactory()
  const mock = mockPostMyArticle(input)
  const data = await postMyArticle(input)
  expect(data).toMatchObject(expect.objectContaining(input))
  expect(mock).toHaveBeenCalled()
})

test("バリデーションに失敗した場合、rejectされる", async () => {
  const input = inputFactory({ title: "", body: "" })
  const mock = mockPostMyArticle(input)
  await postMyArticle(input).catch((e) => {
    expect(e).toMatchObject({ err: { message: expect.anything() } })
    expect(mock).toHaveBeenCalled()
  })
})

test("データ取得に失敗した場合、rejectされる", async () => {
  expect.assertions(2)
  const input = inputFactory()
  const mock = mockPostMyArticle(input, 500)
  await postMyArticle(input).catch(e => {
    expect(e).toMatchObject({ err: { message: expect.anything() } })
    expect(mock).toHaveBeenCalled()
  })
})
