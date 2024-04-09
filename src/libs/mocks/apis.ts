
import { DB } from "./db"

function sleep(ms: number){
    return new Promise((res) => setTimeout(() => res(''), ms))
}

export async function getData() {
    console.log('Call API')
    await sleep(1000)
    return Promise.reject('Error here') 
}

export async function updateData(newData: string) {
    await sleep(1000)
    DB.getData = newData
}