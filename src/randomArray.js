const defaultLength = 10

const randomArray = (length = defaultLength) =>
    Array(...Array(length)).map((v, i) => i)


export default randomArray