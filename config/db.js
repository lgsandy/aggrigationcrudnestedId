const { MongoClient} = require("mongodb");
const {logger} = require("./logger");

let db;
const connectMongodb = async ()=>{
    if(db) return db;
    const client = new MongoClient(process.env.DB_URI);
    try {
        await client.connect();
        db = client.db(process.env.DB_NAME);
        logger.info(`Connected`);
        return db;
    } catch (err) {
        logger.error(`Connection error:${err}`);
    }
}
module.exports=connectMongodb;