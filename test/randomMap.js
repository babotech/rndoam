import expect from 'expect'
import randomMap from '../src/withImmutable/randomMap'

describe(`rndoam`, () => {
    describe(`randomMap()`, () => {
        it(`should generate Map`, () => {
            const propsCount = 5

            const map = randomMap(propsCount)

            expect(map.size)
                .toEqual(propsCount)

        })
    })
})