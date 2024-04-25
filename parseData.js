const parseData = (data) => {
    const columnSplit = data.split('\n')
    const rowSplit = []
    const players = []
    columnSplit.forEach(column => {
        let noQuote = column.replaceAll('"', '')
        rowSplit.push(noQuote.split(','))
    });
    rowSplit.forEach(row => {
         let playerNumber = parseInt(row[0]) || 0
         console.log(playerNumber)
        if (playerNumber != 0) {
            players.push(row)
        } else {
            console.log('not a player')
        }
    } )
    prepareForObject(players)
}

const prepareForObject = (players) => {
    const objectReady = []
    players.forEach(player => {
        objectReady.push(player.slice(0,4))
    })
    createObjects(objectReady)
}

const createObjects = (objectReady) => {
    const playerObjects = {}
    objectReady.forEach(player => {
        const [ number, name, position, grade] = player
        playerObjects[number] = {
                name,
                position,
                grade
            }
    })
    console.log(playerObjects)
}

export {parseData}