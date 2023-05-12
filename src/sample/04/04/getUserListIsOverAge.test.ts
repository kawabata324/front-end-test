import * as getUsers from "./getUsers"
import { httpError } from "../03/fetchers/error";
import { userFixturesData } from "./fixtures/users";
import { getUserListIsOverAge } from "./getUserListHasAge";


jest.mock("./getUsers")

const mockGetUsers = (status = 200) => {
  if (status >= 300) {
    return jest.spyOn(getUsers, "getUsers")
      .mockRejectedValueOnce(httpError)
  }
  return jest.spyOn(getUsers, "getUsers")
    .mockResolvedValueOnce(userFixturesData)
}
describe("getUserListIsOverAge", () => {
  test("正常系:  対象の年齢以上の人がいない場合 nullが返ってくる", async () => {
    const callback = mockGetUsers()
    const data = await getUserListIsOverAge(100)
    expect(data).toBeNull()
    expect(callback).toBeCalled()
  })
  test("正常系: 対象の年齢以上の人がいた場合, userの配列が返ってくる", async () => {
    const callback = mockGetUsers()
    const data = await getUserListIsOverAge(30)
    expect(data).toEqual([
      {
        id: 3,
        name: "斉藤",
        age: 31,
        gender: "man"
      }
    ])
    expect(callback).toBeCalled()
  })
  test("異常系: httpErrorとしてrejectされる", async () => {
    expect.assertions(2)
    const callback = mockGetUsers(500)
    try {
      await getUserListIsOverAge(30)
    } catch (e) {
      expect(e).toBe(httpError)
      expect(callback).toBeCalled()
    }
  })
})
