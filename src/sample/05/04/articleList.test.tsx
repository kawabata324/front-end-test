import { render, screen, within } from "@testing-library/react";
import { ArticleList, ArticleListItem, items } from "./ArticleList";
import {  ItemProps } from "../../../05/04/ArticleListItem";
describe("ArticleList", () => {
  test("itemsの数だけ一覧が表示される", () => {
    render(<ArticleList items={items}/>)
    expect(screen.getAllByRole("listitem")).toHaveLength(3)
  })
  test("一覧が表示される", () => {
    render(<ArticleList items={items}/>)
    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument()
    expect(within(list).getAllByRole("listitem")).toHaveLength(3)
  })
  test("一覧アイテムがからの時「投稿記事はありません」が表示される", () => {
    render(<ArticleList items={[]}/>)
    const list = screen.queryByRole("list")
    expect(list).not.toBeInTheDocument()
    expect(screen.getByText("記事投稿がありません")).toBeInTheDocument()
  })
  const item: ItemProps = {
    id: "1",
    title: "Typescriptを使ったテストの書き方",
    body: "Typescriptを使うことで、テストの保守性が向上します"
  }

  test("idに基づいたリンクが表示される", () => {
  })
  render(<ArticleListItem id={item.id} title={item.title} body={item.body}/>)
  expect(screen.getByRole("link", { name: "もっとみる" })).toHaveAttribute(
    "href",
    "/articles/1"
  )
})
