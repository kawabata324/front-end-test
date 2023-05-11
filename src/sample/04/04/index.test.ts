import * as Fetchers from "../../../04/fetchers";
import { httpError } from "../03/fetchers/error";
import { getMyArticlesData } from "./fixtures";
import { getMyArticleLinksByCategory } from "./index";

jest.mock("../../../04/fetchers")

function mockGetMyArticles(status = 200) {
  if (status >= 300) {
    return jest
      .spyOn(Fetchers, "getMyArticles")
      .mockRejectedValueOnce(httpError)
  }
  return jest
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValueOnce(getMyArticlesData)
}

describe("getMyArticleLinksByCategory", () => {
  describe("データ取得に成功した場合", () => {
    test("指定したタグの記事が一つもない場合、nullが返る", async () => {
      mockGetMyArticles()
      await expect(getMyArticleLinksByCategory("rails")).resolves.toBeNull()
    })
    test("指定したタグの記事があった時、オブジェクトが返る", async () => {
      mockGetMyArticles()
      const data = await getMyArticleLinksByCategory("testing")
      expect(data).toEqual(expect.arrayContaining([
        {
          title: "Typescriptを使ったテストの書き方",
          link: "/articles/howto-testing-with-typescript"
        },
        {
          title: "Jestで始めるReactコンポーネント",
          link: "/articles/react-component-testing-with-jest"
        },
      ]))
    })
  })
  describe("データ取得に失敗した場合", () => {
    test("rejectされる", async () => {
      mockGetMyArticles(400)
      await expect(getMyArticleLinksByCategory("testing")).rejects.toBe(httpError)
    })
  })
})
