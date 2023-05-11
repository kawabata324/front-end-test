export type Profile = {
  id: string;
  name?: string;
  age: number;
  email: string;
}

export const getProfile = (): Promise<Profile> => {
  return fetch("http://myapi.testing.com/my/profile")
    .then(async (res) => {
      const data = await res.json()
      if (!res.ok) {
        throw  data
      }
      return data;
    })
}
