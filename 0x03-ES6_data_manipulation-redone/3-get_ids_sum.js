const getStudentIdSum = (arr) => {
    return arr.reduce((acc, currArr) => acc + currArr.id, 0);
}

export default getStudentIdSum;