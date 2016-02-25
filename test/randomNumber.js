import expect from 'expect'
import randomNumber from '../src/randomNumber'

describe(`rndoam`, () => {
    describe(`randomNumber()`, () => {
        it(`should generate number in the interval`, () => {
            const minNumber = 1
            const maxNumber = 5

            const resultNumber = randomNumber(minNumber, maxNumber)

            expect(resultNumber).toBeGreaterThanOrEqualTo(minNumber)
            expect(resultNumber).toBeLessThanOrEqualTo(maxNumber)
        })
    })
})