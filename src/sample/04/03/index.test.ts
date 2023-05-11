import * as Fetchers from "./fetchers"
import { getGreet } from "./index";
import { httpError } from "./fetchers/error";

jest.mock("./fetchers")

describe("getGreet", () => {
  describe("データ取得成功時", () => {
    test("ユーザ名が含まれていなかったら固定のMessageを返す", async () => {
      jest.spyOn(Fetchers, "getProfile")
        .mockResolvedValueOnce({
          id: "xxx1234",
          age: 36,
          email: "kawabata@gmail.com"
        })
      await expect(getGreet()).resolves.toBe('Hello, anonymous user!')
    })
    test("ユーザ名が含まれていたら挨拶が返ってくる", async () => {
      jest.spyOn(Fetchers, "getProfile")
        .mockResolvedValueOnce({
          id: "vvv1234",
          name: "kawabata",
          age: 21,
          email: "kawabata@gmail.com"
        })
      await expect(getGreet()).resolves.toBe("Hello, kawabata!")
    })
  })
  describe("データ取得失敗時", () => {
    test("httpErrorが返ってくる", async () => {
      jest.spyOn(Fetchers, "getProfile")
        .mockRejectedValueOnce(httpError)
      await expect(getGreet()).rejects.toMatchObject(
        { err: { message: "internal server error" } }
      )
    })
  })
})
