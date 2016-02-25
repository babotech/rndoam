import expect from 'expect'
import rndoam from '../src/rndoam'

describe(`rndoam`, () => {
    it(`should contain all methods`, () => {
        const methods = [
            `array`,
            `collection`,
            `number`,
            `noop`,
            `object`,
            `string`
        ]

        expect(Object.keys(rndoam).length).toEqual(methods.length)

        methods.forEach((methodName) =>
            expect(rndoam[methodName]).toExist()
        )
    })
})