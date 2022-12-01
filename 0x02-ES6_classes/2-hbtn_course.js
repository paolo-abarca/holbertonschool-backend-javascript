export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('students must be a array');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(n) {
    if (typeof n !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = n;
  }

  get students() {
    return this._students;
  }

  set students(n) {
    if (!Array.isArray(n)) {
      throw TypeError('students must be a array');
    }
    this._students = n;
  }
}
