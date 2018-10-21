const createTab = (notes) => {
    const tab = [
        'E|--',
        'A|--',
        'D|--',
        'G|--',
        'B|--',
        'e|--'
    ]

    const maxBeat = Math.max.apply(Math, notes.map(x => x.beat))

    tab.map((_, i) => {
        tab[i] += ('--'.repeat(maxBeat))
    })

    notes.map(x => {
        if (x.fret >= 0 &&
            x.string >= 0 &&
            x.string <= tab.length && 
            x.beat > 0) {
            const i = 2 + x.beat * 2
            let newString = tab[x.string].substr(0, i) + x.fret.toString() + tab[x.string].substr(i+1)
            tab[x.string] = newString
        }
    })

    tab.map((_, i) => {
        tab[i] += ('-|')
    })

    return tab.reverse()
}

module.exports = {
    createTab: createTab
};