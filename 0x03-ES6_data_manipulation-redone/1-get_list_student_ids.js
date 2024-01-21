const getListStudentsIds = (arr) => {
    if (!Array.isArray(arr)) {
        return []
    }
    return arr.map(student => student.id)
}

export default getListStudentsIds