import React from 'react';

function NumberOnly(string) {
    const number = string.replace(/\D+/g, '')
    return number
}

export default NumberOnly;