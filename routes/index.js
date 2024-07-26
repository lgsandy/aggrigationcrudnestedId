const express = require("express");
const router = express.Router();
const enployeeRouts = require("./enployeeRouts");

router.use('/user',enployeeRouts);
module.exports=router;