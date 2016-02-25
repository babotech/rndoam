import {Map} from 'immutable'

import randomObject from './../randomObject'

const randomMap = (...args) =>
    Map(randomObject(...args))

export default randomMap
