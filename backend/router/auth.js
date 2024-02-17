const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require('../middleware/authenticate');

require('../db/conn');

const User = require("../model/userSchema");

router.get('/', (req, res) => {
   res.send('Hello world form the server router.js');

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

router.post('/register', async (req, res) => {
   const { name, email, work, phone, password, cpassword } = req.body;
   if (!name || !email || !work || !phone || !password || !cpassword) {
      return res.status(422).json({ error: " please fill the field first " });
   }

   try {
      const userExist = await User.findOne({ email: email });

      if (userExist) {
         return res.status(422).json({ error: " Email Alredy Exist " });
      } else if (password != cpassword) {
         return res.status(422).json({ error: "password doesn't match, check again " });

      } else {
         const user = new User({ name, email, work, phone, password, cpassword });

         const userResgister = await user.save();

         if (userResgister) {
            return res.status(201).json({ message: " Email sucessfully registered " });
         }

      }




   } catch (err) {
      console.log(err)
   }
});

// login route promise

//router.post('./signin', (req,res) => {
//console.log(req.body);
//res.json({message:" awesome"})

//})

//log in validation check using async

router.post('/signin', async (req, res) => {
   try {


      const { email, password } = req.body;

      if (!email || !password) {
         return res.status(400).json({ error: "please fill the field" })
      }

      const userlogin = await User.findOne({ email: email });



      if (userlogin) {
         const isMatch = await bcrypt.compare(password, userlogin.password);

         const token = await userlogin.generateAuthToken();
         console.log(token);

         res.cookie("jwttoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
         });

         if (!isMatch) {
            res.status(400).json({ error: " invaild credentials" });
         } else {
            res.json({ message: "User signin successfully" });
         }
      } else {
         res.status(400).json({ error: "invalid email" });
      }


   } catch (err) {
      console.log(err);
   }
});

// about us page
router.get('/about', authenticate, (req, res) => {
   console.log('hello this is about');
   res.send(req.rootUser);
});

// get user data for contacting us and get to the home page 

router.get('/getdata', authenticate, (req, res) => {
   console.log('hello my about');
   res.send(req.rootUser);

});

// contact us page 

router.post('/contact', authenticate, async (req, res) => {
   try {

      const { name, email, phone, message } = req.body;
      if (!name || !email || !phone || !message) {
         console.log("error in contact form");
         return res.json({ error: " please fill the contact form" });

      }

      const userContact = await User.findOne({ _id: req.userID });

      if (userContact) {
         const userMessage = await userContact.addMessage(name, email, phone, message);
         await userContact.save();
         res.status(201).json({ message: "usercontact succesfull " });
      }
   } catch (error) {
      console.log(error);
   }

});

// about us page
router.get('/logout',  (req, res) => {
   console.log('hello this is logout page');
   res.clearCookie('jwttoken', {path:'/'});
   res.status(200).send('user logout');
});

module.exports = router;