const express = require("express")
require('dotenv').config();

const {logger} = require('./config/logger');
const router = require("./routes/index");

const app = express();

//register middleware
app.use(express.json());
const PORT = process.env.PORT || 3000

app.use('/api',router);

app.listen(PORT,()=>{
    logger.info(`Server started on port:${PORT}`);
});
