const appendToEachArrayValue=(array, appendString) => {
    const a =[]
    for (const idx of array) {
        a.push(appendString + idx);
    };
    return a;
}

export default appendToEachArrayValue;