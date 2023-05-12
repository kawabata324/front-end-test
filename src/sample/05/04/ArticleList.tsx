import { FC } from "react";

type ItemProp = {
  id: string,
  title: string,
  body: string
}

export const items: ItemProp[] = [
  {
    id: 'howto-testing-with-tyoescript',
    title: 'Typescriptを使ったテストの書き方',
    body: 'テストを書くとき、Typescriptを使うことでテストの保守性が向上します'
  },
  {
    id: 'nextjs-link-component',
    title: 'Next.jsのLinkコンポーネント',
    body: 'Next.jsの画面遷移には、Linkコンポーネントを使用します...'
  },
  {
    id: "react-component-testing-with-jest",
    title: "Jestで始めるReactコンポーネント",
    body: "Jestは単体テストとして、UIコンポーネントのテストが可能です"
  }
]

type Props = {
  items: ItemProp[]
}

export const ArticleList: FC<Props> = ({ items }) => {
  return (
    <div>
      <h2>記事一覧</h2>
      {items.length ? (
        <ul>
          {items.map(item => (
            <ArticleListItem key={item.id} id={item.id} title={item.title} body={item.body}/>
          ))}
        </ul>
      ) : (<p>記事投稿がありません</p>)}
    </div>
  )
}


export const ArticleListItem = ({ id, title, body }: ItemProp) => (
  <li>
    <h3>{title}</h3>
    <p>{body}</p>
    <a href={`/articles/${id}`}>もっとみる</a>
  </li>
)

