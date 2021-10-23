export const sum = (n1, n2) => {
    return n1 + n2;
}

export const res = (n1, n2) => {
    return n1 - n2;
}

export const div = (n1, n2) => {
    if (n2 > 0) {
        return n1 / n2;
    }
    return "Infinito";
}

export const mult = (n1, n2) => {
    return n1 * n2;
}