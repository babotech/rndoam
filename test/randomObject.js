import expect from 'expect'
import randomObject from '../src/randomObject'

describe(`rndoam`, () => {
    describe(`randomObject()`, () => {
        it(`should generate object`, () => {
            const propsCount = 5

            const object = randomObject(propsCount)

            expect(Object.keys(object).length)
                .toEqual(propsCount)

        })
    })
})