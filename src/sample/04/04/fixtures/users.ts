export type User = {
  id: number
  name: string
  age?: number
  gender: "man" | "woman"
}

export type Users = Array<User>

export const userFixturesData: Users = [
  {
    id: 1,
    name: "Yamada",
    age: 23,
    gender: "man"
  },
  {
    id: 2,
    name: "佐藤",
    gender: "woman"
  },
  {
    id: 3,
    name: "斉藤",
    age: 31,
    gender: "man"
  }
]
