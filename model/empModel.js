const connectMongodb = require("../config/db");

const getEmpCollection = async () => {
  const db = await connectMongodb();
  return db.collection("emp");
};
module.exports ={
    getEmpCollection
}