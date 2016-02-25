import {List} from 'immutable'

import randomCollection from '../randomCollection'

export default function randomIterable(...args) {
    return List(randomCollection(...args))
}
