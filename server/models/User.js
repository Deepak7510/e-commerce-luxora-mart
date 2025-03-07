import mongoose from 'mongoose'

const userSechma=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user'
    },

});

const UserModel=mongoose.model('User',userSechma);
export default UserModel