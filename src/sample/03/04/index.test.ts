import {add, sub} from "."

describe('四則演算', () => {
  describe('add', () => {
    test('戻り値は第一引数と第二引数の和である', () => {
      expect(add(1, 2)).toBe(3)
    })
    test('合計の上限は [100]である', () => {
      expect(add(50, 70)).toBe(100)
    })
  })
  describe('sub', () => {
    test('戻り値は第一引数と第二引数の差である', () => {
      expect(sub(2, 1)).toBe(1)
    })
    test('合計の下限は [0]である', () => {
      expect(sub(10, 100)).toBe(0)
    })
  })
})
