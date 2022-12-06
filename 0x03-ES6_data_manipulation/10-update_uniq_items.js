/* eslint-disable */

export default function updateUniqueItems(map) {
  if (!map instanceof Map) {
    throw Error('Cannot process');
  }
  const result = map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return result;
}
