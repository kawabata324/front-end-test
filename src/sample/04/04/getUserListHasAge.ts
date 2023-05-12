import { getUsers } from "./getUsers";
import { Users } from "./fixtures/users";
import { HttpError } from "../03/fetchers/error";

export const getUserListIsOverAge = async (age: number): Promise<Users | HttpError | "!" | null> => {
  const data = await getUsers()
  if (data instanceof Array) {
    const filtersData = data.filter(user => {
      if (user.age === undefined) return false
      return user.age >= age
    })
    return filtersData.length === 0 ? null : filtersData
  } else {
    return data
  }
}
