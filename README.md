# Rndoam [![Build Status](https://travis-ci.org/babotech/rndoam.svg?branch=master)](https://travis-ci.org/babotech/rndoam)

Texture generation tools

## Install 

```
npm install --save rndoam
```

### sring(length: Number)

```javascript
rndoam.string(10) 
```

### number(min: Number, max: Number)

```javascript
rndoam.number(10, 100) 
```

### array(length: Number)

```javascript
rndoam.array(100) 
```

### object(fieldCount: Number, allowNested: Boolean)

```javascript
rndoam.object(10, true)
```

### collection(map: Object, length: Number)

```javascript
rndoam.collection({
    id: () => rndoam.number(),
    text: () => rndoam.string(),
    static: 'static'
}, 5) // => [{id: Number, text: String, static: 'static'}, ...]
 
```

### noop()

```javascript
rndoam.noop()
```

## With immutablejs

```
npm install --save immutable
```

## Import
```javascript
import rndoam from 'rndoam/lib/withImmutable'
```

## immutableCollection(map: Object, length: Number)
## list(length)
## map(length)

