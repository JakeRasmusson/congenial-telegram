import * as fs from 'fs';
import { parseData } from "./parseData.js"


const readFiles = async (pathToFiles) => {
    try {
        const data = await fs.readFileSync(pathToFiles, 'utf-8')
        parseData(data)
    } catch (err) {
        console.log(err)
    }
}

readFiles('./csv/Elkhorn Area Football  Varsity Roster.csv')