import * as fs from 'fs';
import { parseData } from "./parseData.js"


const readFiles = async (pathToFiles, team) => {
    try {
        const data = await fs.readFileSync(pathToFiles, 'utf-8')
        parseData(data, team)
    } catch (err) {
        console.log(err)
    }
}

readFiles('./csv/Elkhorn Area Football  Varsity Roster.csv', 'home')
readFiles('./csv/Westosha Central High School Football  Varsity Roster.csv', 'away')