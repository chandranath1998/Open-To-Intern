

const mongoose = require('mongoose')

/*
College Model
{ name: { mandatory, unique, example iith}, fullName: {mandatory, example `Indian Institute of Technology, Hyderabad`}, 
logoLink: {mandatory}, isDeleted: {boolean, default: false} }

*/

//========================================== post clg Api =====================================================

const collegeSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        unique:true,
        lowercase:true

    },

    fullName:{
         type:String,
        required:true,
    },
logoLink:{
    type:String
},

isDeleted:{
    type:Boolean,
    default:false
}

},{timestamps : true})

module.exports = mongoose.model('college' , collegeSchema)
