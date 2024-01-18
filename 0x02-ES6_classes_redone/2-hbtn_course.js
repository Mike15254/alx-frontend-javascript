export default class HolbertonCourse {
    constructor(name, length, students) {

        if (typeof name !== String) {
            throw TypeError("Name must be a String")
        }
        if (typeof length !== Number) {
            throw TypeError("Length must be an number")
        }
        if (students.some((student) => typeof student !== String)) {
            throw TypeError("Student must be Array of strings")
        }
        this._name = name;
        this._length = length;
        this._students = students;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== String) {
            throw TypeError("Number must be a String")
        }
        this._name = newName;
    }

    get length() {
        return this._length;
    }

    set length(newLength) {
        if (typeof newLength !== Number) {
            throw TypeError("Length must be a Number");
        }
        this._length = newLength
    }

    get students() {
        return this._students;
    }

    set students(newStudent) {
        if (!Array.isArray(newStudent)) {
            throw TypeError("Student must be an array")
        }
        if (newStudent.some((student) => typeof student !== String)) {
            throw TypeError("Student must be array of Strings")
        }
        this._students = newStudent
    }
}