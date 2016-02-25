import {List} from 'immutable'

import expect from 'expect'
import randomList from '../src/withImmutable/randomList'

describe(`rndoam`, () => {
    describe(`randomList()`, () => {
        it(`should generate List of exact length`, () => {
            const expectedLength = 5

            const resultArray = randomList(expectedLength)

            expect(List.isList(resultArray)).toBeTruthy()

            expect(resultArray.size).toEqual(expectedLength)

        })
    })
})