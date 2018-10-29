const createTab = (notes) => {
    if (notes.length == 0) {
        return []
    }
    
    const tab = [
        'E|--',
        'A|--',
        'D|--',
        'G|--',
        'B|--',
        'e|--'
    ]

    const maxBeat = Math.max.apply(Math, notes.map(x => x.beat))

    for(var i = 1; i <= maxBeat; i++) {
        let notesAtBeat = notes.slice(0).filter((x) => x.beat == i)
        if (notesAtBeat.length == 0) {
            tab.map((x, i) => {
                const newString = x + '--'
                tab[i] = newString
            })
            continue
        }
        notesAtBeat.map(x => {
            if (x.fret >= 0 &&
                    x.string >= 0 &&
                    x.string <= tab.length) {
                let newString = ''
                newString = tab[x.string] + x.fret.toString() + '-'
                tab[x.string] = newString
                }
        })
        const l = Math.max.apply(Math, tab.map(x => x.length))
        tab.map((x, i) => {
            const newString = x + '-'.repeat(l - x.length)
            tab[i] = newString
        })
    }

    tab.map((_, i) => {
        tab[i] += ('-|')
    })

    return tab.reverse()
}

module.exports = createTab