import expect from 'expect'
import randomArray from '../src/randomArray'

describe(`rndoam`, () => {
    describe(`randomArray()`, () => {
        it(`should generate array of exact length`, () => {
            const expectedLength = 5

            const resultArray = randomArray(expectedLength)

            expect(Array.isArray(resultArray)).toBeTruthy()

            expect(resultArray.length).toEqual(expectedLength)

        })
    })
})