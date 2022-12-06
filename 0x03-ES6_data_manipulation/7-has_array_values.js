export default function hasValuesFromArray(set, array) {
  for (const arr of array) {
    const result = set.has(arr);
    if (!result) {
      return result;
    }
  }
  return true;
}
