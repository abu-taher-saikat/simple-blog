const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');


// Database
const connectDB = require('./config/db')
// load env vars
dotenv.config({path : './config/config.env'})


// calling routes
const index = require('./router/index.router');


const app = express();
// Body Parser
app.use(express.json())


// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));
// set view engine
app.set("view engine", "ejs");



// Dev logging env
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}






// init router
app.use('/', index);


const PORT = process.env.PORT || 5000;
const server = app.listen(PORT,()=>{
    console.log(`App listening on port ${process.env.NODE_ENV} and port on ${PORT}`.yellow);
})