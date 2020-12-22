export const required = (value: string) => {
    if (value) return undefined
    return "Field is required"
}

export const maxLength = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} chars`
    return undefined
}

