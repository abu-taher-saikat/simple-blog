const mongoose = require("mongoose");
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true
    },()=>{
        console.log('mongodb is connected'.red.bold);
    });
    // console.log(`MongoDB Connected: ${conn.connection.host}`.red.bold);
}


module.exports = connectDB;