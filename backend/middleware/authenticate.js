const jwt = require('jsonwebtoken');
const User =require("../model/userSchema");

const Authenticate = async (req, res ,next) => {
    try {
         const token = req.cookies.jwtoken ;
         const varifytoken = jwt.varify(token, process.env.SECRET_KEY) ;
          const rootuser = await User.findOne({_id:varifytoken._id, "tokens : token" : token});
          if (!rootuser){ throw new Error ('user not found')}
          
          req.token= token ;
          req.rootuser = rootuser;
          req.userID = rootuser._id;
          next();


    }catch (err){
        res.status(401).send('Unauthorized: No token provided');
        console.log(err);
    }
}


module.exports= Authenticate ;