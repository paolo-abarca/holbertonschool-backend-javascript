export default function groceriesList() {
  const list1 = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const list2 = [10, 10, 1, 1, 5];

  const result = new Map();
  for (const grocerie of list1) {
    for (const number of list2) {
      result.set(grocerie, number);
      list2.shift();
      break;
    }
  }

  return result;
}
