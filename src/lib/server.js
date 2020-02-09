'use strict';

// 3rd party dependencies
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// custom routes
const apiRouter = require('../routes/v1.js');
const errorHandel = require('../middleware/500.js');
const notFound = require('../middleware/404.js');
// application constants
const app = express();


app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(apiRouter);
app.use(notFound);
app.use(errorHandel);



module.exports = {
  server: app,
  start: port=>{
    let PORT = port || process.env.PORT || 2000;
    app.listen(PORT, ()=>console.log(`SERVER IS LISTEN TO PORT ${PORT}`));
  },
};