const express = require("express");

// backend ka router jo express provide kr rha hai

const router = express.Router();

require('../db/conn');
const  User = require("../model/userSchema");

// router.get('/',(req,res)=>{
//     res.send(`You are on home page using router js in express`);
// });

//register page pe jo bhi data enter kroge wo sb post ho jayega
router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

//FOR VALIDATION
// agr koi bhi input filled empty rh gyi like name,email etc 
//to hm ek error show karenge user ko 
//error=> please fill all details.

if(!name || !email || !phone || !work || !password || !cpassword ){
    return res.status(422).json({error:"Please fill all details"});
    
}
//Now we will check ki user already registered hai yaa first time user on the basis of email and phone number
//using findOne({jo data store hai online db me : jo user fill kr rha hai input box me})
//findOne() ke andar dono variable ko check krenge ki kya yeh dono same hai agr same hai means user already registered hai
// findOne() will return promise is both matching or not
//so we will use .then 
User.findOne({email: email})
.then((userExist)=>{
    if(userExist){
        return res.status(422).json({error:"Email already Exist"});
    }
// if user does not exist means user first time register kr rha hai then khud ka ek document create hoga
// const user = new User({ name:name, email:email, phone:phone, work:work, password:password, cpassword:cpassword})
// but both key and value is same like name:name so in this case hm directly name,email... likh skte hai
//const user uper wale ko comment krke EC6 2015 me jo object ka new properties introduce hua thaa uska use krke 
//const user = new User({name,email,password,...}) krke likhnege
const user = new User({name, email, phone, work, password, cpassword });
//user ka sara data const user variable me store ho chuka hai 
//now user ko online db ke collection me save krna hai
//using user.save()
//user.save returns promises so we will use .then
user.save().then(()=>{
    res.status(201).json({message: "user registered successfully"});
}).catch((err)=>res.status(500).json({error:"Failed to register"}));

//.catch me ek hi parameter hai toh we dont need to write like this=> .catch(())
}).catch(err=>{console.log(err);});





//   console.log(name);
//   console.log(email);
//   console.log(password);

  //   res.json({ message: req.body });
});

module.exports = router;
