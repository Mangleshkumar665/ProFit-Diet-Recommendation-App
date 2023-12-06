const mongoose = require("mongoose");

const User = require('./users')
const jobSchema = new mongoose.Schema({
    company:{
        type:String, 
        required:[true, 'please provide company name '],
        maxlength:50
    },   
    position:{
        type:String,
        required:[true , 'please provide prosition '],
        maxlength:100
        
    },
    status:{
        type:String,
        enum :[ 'interview' ,' declined', ' pending'],
        default : 'pending'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        requried: [ true , 'Please provide an user']
    }
}, {timestamps: true});



module.exports = mongoose.model('Job',jobSchema)
