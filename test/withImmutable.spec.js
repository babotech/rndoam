import expect from 'expect'
import rndoam from '../src/withImmutable'

describe(`rndoam`, () => {
    describe(`withImmutable`, () => {
        it(`should contain all methods`, () => {
            const methods = [
                `array`,
                `collection`,
                `number`,
                `noop`,
                `object`,
                `string`,
                `immutableCollection`,
                `list`,
                `map`
            ]

            expect(Object.keys(rndoam).length).toEqual(methods.length)

            methods.forEach((methodName) =>
                expect(rndoam[methodName]).toExist()
            )
        })
    })
})