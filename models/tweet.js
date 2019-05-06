const mongoose=require('mongoose')
const Schema=mongoose.Schema

const tweetSchema=new Schema({
body: {type: String,required:true},
usertweet: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// userfav:[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

},{timestamps:true})

const Tweet=mongoose.model('Tweet',tweetSchema)
module.exports=Tweet