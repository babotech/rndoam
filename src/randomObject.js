import randomNumber from './randomNumber'
import randomString from './randomString'

const defaultFieldCount = 10

const randomObject = (fieldCount = defaultFieldCount, allowNested = false) => {
    const generatedObj = {}

    /* eslint-disable no-magic-numbers */
    for (let i = 0; i < fieldCount; i++) {
        let generatedObjField

        switch (randomNumber(0, allowNested ? 5 : 4)) {

            case 0:
                generatedObjField = randomNumber()
                break

            case 1:
                generatedObjField = Math.random()
                break

            case 2:
                generatedObjField = Math.random() < 0.5
                break

            case 3:
                generatedObjField = randomString(randomNumber())
                break

            case 4:
                generatedObjField = null
                break

            case 5:
                generatedObjField = randomObject(fieldCount, allowNested)
                break
        }
        /* eslint-enable */
        generatedObj[randomString()] = generatedObjField
    }
    return generatedObj
}


export default randomObject