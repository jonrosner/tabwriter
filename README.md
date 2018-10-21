# TabWriter

With TabWriter it is easy to create your own guitar tabs from JavaScript objects.

## Installation

`npm install tabwriter`

## Data

TabWriter takes an array of "note"-objects as input. An example of such an array would be

```js
const notes = [
    {
        string: 0, // 0 is the low E string
        fret: 1, // 0 would be open string,
        beat: 1 // first beat of first bar
    },
    {
        string: 0,
        fret: 4,
        beat: 2
    },
    {
        string: 1,
        fret: 4,
        beat: 2
    }
]
```

## Usage

```js
var tabwriter = require('tabwriter');

tabwriter.createTab(notes)
/*
[ 'e|-------|',
  'B|-------|',
  'G|-------|',
  'D|-------|',
  'A|----4--|',
  'E|--1-4--|' ]
*/
```