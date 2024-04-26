const fs = require('fs')

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
    const playerObjects = []
    objectReady.forEach(player => {
        const [ number, name, position, grade] = player
        playerObjects.push({
            playername: `${number} ${team}`,
                name,
                position,
                grade
            })
    })
    saveJson(playerObjects, team)
}


const saveJson = (playerObjects, team) => {
    fs.writeFile(`${team}roster.json`, JSON.stringify(playerObjects), function (err) {
        if (err) throw err;
        console.log("File Created");
    });
}

module.exports = {parseData}