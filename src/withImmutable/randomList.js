import {List} from 'immutable'

import randomArray from '../randomArray'

export default function randomList(...args) {
    return List(randomArray(...args))
}
