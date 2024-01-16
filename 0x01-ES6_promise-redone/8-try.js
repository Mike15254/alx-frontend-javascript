const divideFunction = (numerator, denominator) => {
    if (denominator === 0) {
        throw (
             Error("Cannot divide by 0")
        )
    }
    try {
        return (numerator / denominator)
    } catch (error) {
        console.log(error)
    }
}

export default divideFunction;