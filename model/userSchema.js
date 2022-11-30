const mongoose = require('mongoose');

//Document ka structure
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        //required:true => validation ki trh work karega means jb tk user name wali filled me 
        //kuchh type nhi karega tb tk wo nhi chalega error aa jayega
        required:true
    },
    email: {
        type: String,
        required:true
    },
    phone: {
        //type is number bcz phone no number type ka hota hai
        type:Number,
        required:true
    },
    work: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    cpassword: {
        type:String,
        required:true
    }
})

//userSchema ko project ke sath attach krne k liye models use karenge

//model create krna means collection create krna

//CREATING MODEL

//mongoose.model me jo USER hai wo mere collection ka name hoga
//collection bnne k baad Atlas me yeh plural ho jayega USER SE Users ho jayega
//userSchema ko collection k sath connect kr liya

const User = mongoose.model('USER',userSchema);

module.exports = User;