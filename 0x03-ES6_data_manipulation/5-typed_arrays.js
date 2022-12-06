export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }

  const arr = new ArrayBuffer(length);
  const data = new DataView(arr);
  data.setInt8(position, value);
  return data;
}
