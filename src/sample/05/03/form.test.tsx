import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Form", () => {
  test("名前が表示されていること", () => {
    render(<Form name="kawabata"/>)
    expect(screen.getByText("kawabata")).toBeInTheDocument()
  })
  test("ボタンの表示", () => {
    render(<Form name="kawabata"/>)
    expect(screen.getByRole("button")).toBeInTheDocument()
  })
  test("見出しの表示", () => {
    render(<Form name="kawabata"/>)
    expect(screen.getByRole("heading")).toHaveTextContent("アカウント情報")
  })
  test("ボタンを押下するとイベントハンドラが呼び出される", () => {
    const mockFn = jest.fn()
    render(<Form name="kawabata" onSubmit={mockFn}/>)
    fireEvent.click(screen.getByRole("button"))
    expect(mockFn).toHaveBeenCalled()
  })
})
