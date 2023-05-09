import {add, sub} from ".";

describe('四則演算', () => {
  describe('add', () => {
    test('引数が0~100の範囲外だった場合例外をthrowすること', () => {
      const message = '入力値は0~100の間で入力してください'
      expect(() => add(-1, 100)).toThrow(RangeError(message))
      expect(() => add(1, 200)).toThrow(RangeError(message))
      expect(() => add(-1, 300)).toThrow(RangeError(message))
    })
  })
  describe('sub', () => {
    test('引数が0~100の範囲外だった場合例外をthrowすること', () => {
      const message = '入力値は0~100の間で入力してください'
      expect(() => sub(-1, 100)).toThrow(RangeError(message))
      expect(() => sub(1, 200)).toThrow(RangeError(message))
      expect(() => sub(-1, 300)).toThrow(RangeError(message))
    })
  })
})
