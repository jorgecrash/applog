const {model, Schema} = require('mongoose')
//const mongoose =require("mongoose");
//const{Schema}=mongoose;

const NoteSchema=new Schema({

    title:{type: String,required:true },
    description:{type: String,required:true},
    date:{type: Date,default:Date.now}
});
module.exports = model('Note', NoteSchema)
//module.export=mongoose.model('Note',NoteSchema)