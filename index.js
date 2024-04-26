const fs = require('fs')
const {parseData} =  require("./parseData.js")


const readFiles = async (pathToFiles, team) => {
    try {
        const data = await fs.readFileSync(pathToFiles, 'utf-8')
        parseData(data, team)
    } catch (err) {
        console.log(err)
    }
}

const readJson = async (team) => {
    try {
        return await fs.readFileSync(`homeroster.json`, 'utf-8')
    } catch (err) {
        console.log(err)
    }
}

readFiles('./csv/Elkhorn Area Football  Varsity Roster.csv', 'home')
readFiles('./csv/Westosha Central High School Football  Varsity Roster.csv', 'away')
// console.log(readJson('home'))


module.exports = {readJson}