import immutableCollection from './withImmutable/randomImmutableCollection'
import list from './withImmutable/randomList'
import map from './withImmutable/randomMap'
import random from './rndoam'

export default{
    ...random,
    immutableCollection,
    list,
    map
}