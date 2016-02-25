const defaultLength = 10
const radix = 36

const randomString = (length = defaultLength) =>
    Math
        .random()
        .toString(radix)
        .substr(0, length)

export default randomString