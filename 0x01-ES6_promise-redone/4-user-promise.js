const signupUser = (firstName, lastName) => {
    return new Promise((resolve) => {
        resolve(
            {
                firstName,
                lastName
            }
        )
    })
}

export default signupUser;