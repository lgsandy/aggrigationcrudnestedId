const { ObjectId } = require("mongodb");
const { getEmpCollection } = require("../model/empModel");

const fetchEmployee = async () => {
  const collection = await getEmpCollection();
  //to find detail but emp details holds address refrenced id so we need teails
  // return collection.find({}).toArray();
  //to populate nested object refreence
  const emp = await collection.aggregate([
    {
      $lookup: {
        from: "address",
        localField: "addr",
        foreignField: "_id",
        as: "address",
      },
    },
    {
      $lookup: {
        from: "current_address",
        localField: "address.curr_add",
        foreignField: "_id",
        as: "curr_add",
      },
    },
  ]);

  return emp.toArray();
};
const saveEmployee = async (details) => {
  try {
    const collection = await getEmpCollection();
    const empTobeSaved = {
      name: details.name,
      role: details.role,
      addr: new ObjectId(details.addr),
    };
    const emp = collection.insertOne(empTobeSaved);
    console.log("details in service", emp);
    return emp;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  fetchEmployee,
  saveEmployee,
};
