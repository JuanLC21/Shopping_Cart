import { promises as fs } from 'fs'
import path from 'path'

export const PATH = path.join(__dirname, 'data/dataPlatzi.json')

export async function dataProducts() {
    try {
        const data = await fs.readFile(PATH, 'utf8')
        const dataJson = JSON.parse(data)
        return dataJson
    } catch (error) { console.error('ERROR:', error) }
}
// import data from './db.json' assert { type: 'json' }