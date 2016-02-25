import expect from 'expect'
import randomString from '../src/randomString'

describe(`rndoam`, () => {
    describe(`randomString()`, () => {
        it(`should generate string of exact length`, () => {
            const length = 15

            const resultString = randomString(length)

            expect(typeof resultString === `string`).toBeTruthy()
            expect(resultString.length).toEqual(length)
        })
    })
})