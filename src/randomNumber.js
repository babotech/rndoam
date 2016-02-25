const defaultMax = 100

const randomNumber = (min = 0, max = defaultMax) =>
    Math.floor(Math.random() * (max - min + 1)) + min

export default randomNumber