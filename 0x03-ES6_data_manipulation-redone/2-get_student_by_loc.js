const getStudentsByLocation = (arr, city) => {
    const byLocation = arr.filter(function (locate) {
        return locate.location === city
    })
    return byLocation;
}

export default getStudentsByLocation;