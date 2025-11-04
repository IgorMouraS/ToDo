export function fetchDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}