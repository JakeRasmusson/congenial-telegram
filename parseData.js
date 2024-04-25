const parseData = (data, team) => {
    const rowSplit = data.split('\n')
    const columnSplit = []
    const players = []
    rowSplit.forEach(row => {
        let noQuote = row.replaceAll('"', '')
        columnSplit.push(noQuote.split(','))
    });
    columnSplit.forEach(column => {
         let playerNumber = parseInt(column[0])
         console.log(playerNumber)
        if (!isNaN(playerNumber)) {
            players.push(column)
        } else {
            console.log('not a player')
        }
    } )
    prepareForObject(players, team)
}

const prepareForObject = (players, team) => {
    const slicedPlayers = players.map(player => player.slice(0,4))
    createObjects(slicedPlayers, team)
}

const createObjects = (objectReady, team) => {
    const playerObjects = {}
    objectReady.forEach(player => {
        const [ number, name, position, grade] = player
        playerObjects[`${number} ${team}`] = {
                name,
                position,
                grade
            }
    })
    console.log(playerObjects)
}

export {parseData}