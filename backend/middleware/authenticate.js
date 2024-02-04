const jwt =require('jsonwebtoken');
const User =require("../model/userSchema");

const Authenticate = async (req, res ,next) => {
    try {
         const token = req.cookies.jwttoken ;
         console.log('token is ' , req.cookies) ;
         const verifytoken = jwt.verify(token, process.env.SECRET_KEY) ;
          const rootUser = await User.findOne({_id: verifytoken._id, "tokens.token" : token});
         
          if (!rootUser){ throw new Error('user not found')}
          
          req.token= token;
          req.rootUser = rootUser;
          req.userID = rootUser._id;
          next();


    }catch (err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}


module.exports= Authenticate ;