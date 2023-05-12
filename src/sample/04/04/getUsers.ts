import { HttpError, httpError } from "../03/fetchers/error";
import { Users } from "./fixtures/users";

export const getUsers = async (): Promise<Users | HttpError> => {
  try {
    const data = await fetch("/api/v1/users")
    return data.json()
  } catch (e) {
    return httpError
  }
}
