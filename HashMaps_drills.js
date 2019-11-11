const HashMap = require('./HashMap')

function main() {
    let lor = new HashMap()
    lor.MAX_LOAD_RATIO = 0.5
    lor.SIZE_RATIO = 3
    lor.set('Hobbit', 'Bilbo')
    lor.set('Hobbit', 'Frodo')
    lor.set('Wizard', 'Gandolf')
    lor.set('Human', 'Aragorn')
    lor.set('Elf', 'Legolas')
    lor.set('Maiar', 'Sauron')
    lor.set('RingBearer', 'Gollum')
    lor.set('LadyOfLight', 'Galadriel')
    lor.set('HalfElven', 'Arwen')
    lor.set('Ent', 'Treebeard')
    console.log(lor)
}

main()