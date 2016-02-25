const defaultLength = 10

const randomCollection = (map, length = defaultLength) => {


    return Array(...Array(length))
        .map(() =>
            Object.keys(map)
                .reduce((acc, key) => {
                    const value = map[key]

                    if (typeof value === `function`) {
                        acc[key] = value()
                        return acc
                    }

                    acc[key] = value
                    return acc
                }, {}))
}

export default randomCollection