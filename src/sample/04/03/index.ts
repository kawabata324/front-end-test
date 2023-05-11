import { getProfile } from "./fetchers";

export const getGreet = async () => {
  const data = await getProfile()
  if (!data.name) {
    return `Hello, anonymous user!`
  }

  return `Hello, ${data.name}!`
}
