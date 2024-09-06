export function getFromStorage<T>(key: string): T | undefined {
  const item = localStorage.getItem(key)
  return item && item !== 'undefined' ? (JSON.parse(item) as T) : undefined
}
