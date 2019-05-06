const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
username: {type: String,required:true},
name: {type: String,required:true},
followers: [{type: String,required:true}],
following: [{type: String,required:true}],
favorite: [{type: String,required:true}],
// tweets:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Tweet' }]
},{timestamps:true})

const User=mongoose.model('User',userSchema)
module.exports=User