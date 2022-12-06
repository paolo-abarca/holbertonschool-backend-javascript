export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    if (weakMap.get(endpoint) >= 5) {
      throw new Error('Endpoint load is high');
    }
    const iterator = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, iterator);
  }
}
