import { MongoClient } from "mongodb";

const client = new MongoClient('mongodb://localhost:27017')

client.connect()
    .then(() => {
        const db = client.db('AH20231CP1')
    })
    .catch(err => console.log("no se pudo conectar a la DB" , err))