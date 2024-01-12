const createEmployeeObject = (departmentName, employees) =>{
    // const result = [];
    // for (let idx of employees) {
    //     result.push(idx.toString())
    // };
    // const job = {
    //     [`${departmentName}`]: result
    // }
    return {[departmentName]: employees};
}

export default createEmployeeObject;