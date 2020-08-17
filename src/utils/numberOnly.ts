function NumberOnly(string) {
    if (string !== undefined && string !== null) {
        const number = string.replace(/\D+/g, '')
        return number
    }
}

export default NumberOnly;