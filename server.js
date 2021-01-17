const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const methodoverride  = require('method-override');

const requireAuth = require('./middleware/authMiddleWare');
const checkUser = require('./middleware/checkCurrentUser');

dotenv.config({path : './config/config.env'})


// Database
const connectDB = require('./config/db')
connectDB();
// load env vars


// calling routes
const index = require('./router/index.router');
const blog = require('./router/blog.router');
const user = require('./router/user.router');


const app = express();
// Body Parser
app.use(express.json());
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended : false}))


// Set Static folder
app.use(express.static(path.join(__dirname, 'public')));
// set view engine
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : false}))
// methode override
app.use(methodoverride("_method"))



// Dev logging env
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}






// init router
app.get('*', checkUser);
app.use('/', index);
app.use('/blog', blog);
app.use('/user', user);



const PORT = process.env.PORT || 3030;
const server = app.listen(PORT,()=>{
    console.log(`App listening on port ${process.env.NODE_ENV} and port on ${PORT}`.yellow);
})