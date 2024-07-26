const express =require("express");
const router = express.Router();
const {getAllEmp,saveEmpDetails} = require('../controllers/empController');

router.get('/',getAllEmp)
router.post('/',saveEmpDetails)
module.exports=router;