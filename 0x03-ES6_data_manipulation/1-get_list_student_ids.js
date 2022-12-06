export default function getListStudentIds(arg) {
  if (!Array.isArray(arg)) {
    return [];
  }
  const result = arg.map((x) => x.id);
  return result;
}
