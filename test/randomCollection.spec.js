import expect from 'expect'
import randomCollection from '../src/randomCollection'

describe(`rndoam`, () => {
    describe(`randomCollection()`, () => {
        it(`should generate collection of exact length`, () => {
            const expectedLength = 5

            const itemTemplate = {
                foo: `bar`
            }

            const resultCollection = randomCollection(itemTemplate, expectedLength)

            expect(Array.isArray(resultCollection)).toBeTruthy()

            expect(resultCollection.length).toEqual(expectedLength)

            resultCollection.forEach(item =>
                expect(item).toEqual(itemTemplate)
            )
        })

        it(`should call value creator`, () => {
            const expectedLength = 5

            const valueCreator = expect.createSpy()
                .andReturn(`bar`)
            const itemTemplate = {
                foo: valueCreator
            }

            const resultCollection = randomCollection(itemTemplate, expectedLength)

            expect(valueCreator.calls.length).toEqual(expectedLength)

            expect(resultCollection.length).toEqual(expectedLength)

            resultCollection.forEach(item => expect(item)
                .toEqual({
                    foo: `bar`
                }))
        })
    })
})