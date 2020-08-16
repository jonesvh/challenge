function CPFMask(cpf) {
    const firstSlice = cpf.slice(0, 3)
    const secondSlice = cpf.slice(3, 6)
    const thirdSlice = cpf.slice(6, 9)
    const verificationDigit = cpf.slice(9, 11)

    const maskedCPF = firstSlice + '.' + secondSlice + '.' + thirdSlice + '-' + verificationDigit
    return maskedCPF
}

export default CPFMask