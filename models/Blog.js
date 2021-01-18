const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    categories : {
        type : String,
        required : true
    },
    tags : {
        type : String
    },
    img: {
        type: String,
        required: false,
      },
})


const Blog = mongoose.model('Blog', BlogSchema);
module.exports = Blog ;