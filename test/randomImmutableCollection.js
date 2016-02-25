import {List} from 'immutable'

import expect from 'expect'
import randomImmutableCollection from '../src/withImmutable/randomImmutableCollection'

describe(`rndoam`, () => {
    describe(`randomImmutableCollection()`, () => {
        it(`should generate collection of exact length`, () => {
            const expectedLength = 5

            const itemTemplate = {
                foo: `bar`
            }

            const resultCollection = randomImmutableCollection(itemTemplate, expectedLength)

            expect(List.isList(resultCollection)).toBeTruthy()

            expect(resultCollection.size).toEqual(expectedLength)

            resultCollection.forEach(item =>
                expect(item).toEqual(itemTemplate)
            )
        })
    })
})