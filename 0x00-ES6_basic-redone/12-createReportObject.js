const createReportObject = (employeesList) => {
    // const allEmployees = {...employeesList};

    // const getNumberOfDepartments = (employees) => {
    //     return Object.keys(employees).length;
    // }

    // return {
    //     allEmployees,
    //     getNumberOfDepartments
    // };


    return {
        allEmployees: { ...employeesList },
        getNumberOfDepartments: (employee) => {
            return Object.keys(employee).length;
        }
    };
}

export default createReportObject;