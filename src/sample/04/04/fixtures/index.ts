import { Articles } from "../../../../04/fetchers/type";

export const getMyArticlesData: Articles = {
  articles: [
    {
      id: "howto-testing-with-typescript",
      createdAt: "2022-07-19T22:38:41.005z",
      tags: ["testing"],
      title: "Typescriptを使ったテストの書き方",
      body: "テストを書くとき、Typescriptを使うことでテストの保守性が向上します"
    },
    {
      id: "nextjs-link-component",
      createdAt: "2022-07-19T22:38:41.005z",
      tags: ["next.js"],
      title: "Next.jsのLinkコンポーネント",
      body: "Next.jsの画面遷移には、Linkコンポーネントを使用します..."
    },
    {
      id: "react-component-testing-with-jest",
      createdAt: "2022-07-19T22:38:41.005z",
      tags: ["testing", "react"],
      title: "Jestで始めるReactコンポーネント",
      body: "Jestは単体テストとして、UIコンポーネントのテストが可能です"
    }
  ]
}
