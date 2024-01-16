const jwt = require('jsonwebtoken');
const express =  require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')

 const User =require("../model/userSchema");

router.get('/',(req,res) => {
    res.send ('Hello world form the server router.js');

});
 //register using promises
//router.post('/register', (req,res) =>{
//    const { name , email, work , phone, password, cpassword } = req.body;
//  if (!name || !email ||!work|| !phone ||  !password || !cpassword ) {
//     return res.status(422).json ({error: " please filled the field first "});
//  }

//   User.findOne({email:email})
     //   .then((userExist) => {
      //  if(userExist) {
      //  return res.status(422).json ({error: " Email Alredy Exist "});
   // }
     
   // const user =  new User ({ name , email, work , phone, password, cpassword });
   
   // user.save().then( (res) => {
     //   res.status(201).json (res);       
    //    }).catch((err) => res.status(500).json(err));
   // }).catch(err => {console.log(err); });
//}) ;   

router.post('/register', async (req,res) =>{
      const { name , email, work , phone, password, cpassword } = req.body;
       if (!name || !email ||!work|| !phone ||  !password || !cpassword ) {
            return res.status(422).json ({error: " please filled the field first "});
       }
    
          try {
          const userExist =await User.findOne({email:email}); 

            if(userExist) {
            return res.status(422).json ({error: " Email Alredy Exist "});
       }  else if(password!= cpassword){
        return res.status(422).json ({error: "password doesn't match, check again "});

       } else{
        const user =  new User ({ name , email, work , phone, password, cpassword });

       const userResgister = await user.save();

       if (userResgister){
        return res.status(201).json({message: " Email sucessfully registered "});
       }

       }

       
       

        }catch(err){
        console.log(err)
    }
});

// login route promise

//router.post('./signin', (req,res) => {
//console.log(req.body);
//res.json({message:" awesome"})

//})

//log in validation check using async

router.post('/signin', async (req,res) => {
 try{

    const {email, password} = req.body;
     
    if (!email || !password) {
      return  res.status(400).json({error: "please filled the field"})
      }
      
      const userlogin = await User.findOne({email:email});

      
      if(userlogin){
              const isMatch = await bcrypt.compare(password,userlogin.password);

               const token = await userlogin.generateAuthToken();
              console.log(token);
              res.cookie("jwttoken", token, {
                expires: new Date(Date.now()+ 25892000000),
                httpOnly:true
              });

        if(!isMatch){
           res.status(400).json({error:" invaild password"});
        } else{
           res.json({message:"User signin successfully"});
        }
        }else{
          res.json({error:"invalid email"});
        }

      
      


  }catch (err) {
     console.log(err);
  }
});

// res.json({message: req.body});
module.exports= router;