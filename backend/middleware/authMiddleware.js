// const jwt = require("jsonwebtoken");
// const User = require("../models/User");


// //middleware to protect routes
// const protect = async(req, res, next) => {
//   let token;

//   if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
//     try{
//       token = req.headers.authorization.split(" ")[1];
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       req.user = await User.findById(decoded.user.id).select("-password");
//       next();
//     } catch (error){
//       console.log("Token verification failed:",error)
//       res.status(401).json({message: "Not authorized, token failed"});
//     }
//   } else {
//     res.status(401).json({message: "Not authorized, no token provided"});
//   }
// };

// //middleware to check if the user is an admin
// const admin = (req, res, next) => {
//   if(req.user && req.user.role === "admin") {
//     next();
//   } else {
//     res.status(403).json({message: "Not authorized as an admin"});
//   }
// }

// module.exports = {protect, admin};


const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded JWT:", decoded);

      req.user = await User.findById(decoded.user.id).select("-password");

      console.log("User found:", req.user);

      if (!req.user) {
        return res.status(401).json({
          message: "User associated with this token was not found",
        });
      }

      next();
    } catch (error) {
      console.log("Token verification failed:", error);

      return res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  } else {
    return res.status(401).json({
      message: "Not authorized, no token provided",
    });
  }
};

// Middleware to check if user is an admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "Not authorized as an admin",
    });
  }
};

module.exports = { protect, admin };