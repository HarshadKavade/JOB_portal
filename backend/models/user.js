import mongoose from 'mongoose';

const userSchema =new mongoose.Schema({

    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required :true,
        unique:true,
    },
    
    password:{
        type:String,
        required:true
    },
    role:{

        type: String ,
        enum:["student","recruiter"],
        required:true,
    },
    profile:{

        bio:{
            type:String,
        },
        skills:[{
            type:String,
        }],
        resume:{
            type:String, // URL to the resume file
        },
        resumeOriginalName:{
            type:String, // Original name of the uploaded resume file
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Company",
        }, // Only for recruiters
        profilePhoto:{
            type:String,
            default:"https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Picture.png",
        }
    },
   


},{timestamps:true});

export const User = mongoose.model('User', userSchema);