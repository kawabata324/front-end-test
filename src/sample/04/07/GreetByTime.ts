export const greetByTime = () => {
  const hour = new Date().getHours()
  if (4 <= hour && hour < 12) {
    return "おはよう"
  } else if (12 <= hour && hour < 18) {
    return "こんにちは"
  } else {
    return "こんばんは"
  }
}
