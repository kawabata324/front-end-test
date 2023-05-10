import { timeout, wait } from ".";

describe('非同期処理のテスト', () => {
  describe('resolve', () => {
    test('指定時間待つと、経過時間をもってresolveされる', () => {
      return wait(50).then((duration) => {
        expect(duration).toBe(50)
      })
    })
    test('指定時間待つと、経過時間をもってresolveされる', () => {
      return expect(wait(50)).resolves.toBe(50)
    })
    test('指定時間を待つと、経過時間をもってresolveされる', async () => {
      await expect(wait(50)).resolves.toBe(50)
    })
    test('指定時間待つと、経過時間をもってresolveされる', async () => {
      expect(await wait(50)).toBe(50)
    })
  })
  describe('reject', () => {
    test('指定時間を待つと、経過時間をもってrejectされる', () => {
      return timeout(50).catch((duration) => {
        expect(duration).toBe(50)
      })
    })
    test('指定時間を待つと、経過時間をもってrejectされる', () => {
      return expect(timeout(50)).rejects.toBe(50)
    })
    test('指定時間待つと、経過時間をもってrejectされる', async () => {
      await expect(timeout(50)).rejects.toBe(50)
    })
    test('指定時間待つと、経過時間をもってrejectされる', async () => {
      // アサーションの回数を期待しておくことで途中で処理が終わらないようにする
      expect.assertions(1);
      try {
        await timeout(50)
      } catch (e) {
        expect(e).toBe(50)
      }
    })
  })
})


