const { logger } = require("../config/logger");
const {fetchEmployee,saveEmployee} = require("../services/empService");
const getAllEmp = async (req,res)=>{
    try {
        logger.info(`getAllEmp controller method`);
        const emps= await fetchEmployee();
        return res.json(emps);
    } catch (error) {
        console.log('error in fetching employees',error);
    }
}

const saveEmpDetails = async (req,res)=>{
    try {
        const emp={name:req.body.name,role:req.body.role,addr:req.body.addr}
        const savedDet = await saveEmployee(emp);
        return res.json(savedDet);
    } catch (error) {
        
    }
}

module.exports={
    getAllEmp,
    saveEmpDetails
}