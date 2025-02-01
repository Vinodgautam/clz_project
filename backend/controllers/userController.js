// const asyncHandler = require("express-async-handler");
// const User = require("../models/userModel");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
// };

// //Register User
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body;

//   //validaton
//   //form fill
//   if (!name || !email || !password) {
//     res.status(400);
//     throw new Error("please Fill your form");
//   }
//   if (password.length < 6) {
//     res.status(400);
//     throw new Error("Password must be at least 6 characters");
//   }

//   //check if user already exist
//   const userExit = await User.findOne({ email: email });
//   if (userExit) {
//     res.status(400);
//     throw new Error("A user with this email already exists ");
//   }

//   //Encrypt password before saving to DB
//   // Step 3: Create a new user in the DB
//   // Step 3.1 : We do not store passwords in plain text.
//   // xyz: we convert the plain text password to a hash.
//   // xyz --> asghajskbvjacnijhabigbr
//   // My hash of xyz depends on 2 parameters.
//   // If I keep those 2 parameters same, xyz ALWAYS gives the same hash.
//   //salt = hashedPassword
//   //   const hashedPassword = await bcrypt.hash(password, 10);
//   //    const salt = await  bcrypt.genSalt(10)
//   //  const hashedPassword = await bcrypt.hash(password, salt);
//   // we are not doing hashing here because we have already done it in userModel
//   // because we can we it in different place

//   //Create a new user
//   const user = await User.create({
//     name,
//     email,
//     password,
//   });

//   // Generate Token
//   const token = generateToken(user._id);

//   //Sent HTTP_only Cookie
//   res.cookie("token", token, {
//     path: "/",
//     httpOnly: true,
//     expires: new Date(Date.now() + 1000 * 86400), //1day
//     sameSite: "none",
//     secure: true,
//   });

//   if (user) {
//     const { _id, name, email, photo, phone, bio } = user;
//     res.status(201).json({
//       _id,
//       name,
//       email,
//       photo,
//       phone,
//       bio,
//       token,
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid user data");
//   }

//   // if(!req.body.email) {
//   //     res.status(400);
//   //     throw new Error("Please add an email")
//   // }
//   // res.send("Register User");
// });

// // Login User
// const loginUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   // Validate Request
//   if (!email || !password) {
//     res.status(400);
//     throw new Error("Please add email and password");
//   }

//   // Check if user exists
//   const user = await User.findOne({ email });

//   if (!user) {
//     res.status(400);
//     throw new Error("User not found, please signup");
//   }

//   // User exists, check if password is correct
//   const passwordIsCorrect = await bcrypt.compare(password, user.password);

//   //   Generate Token
//   const token = generateToken(user._id);

//   if (passwordIsCorrect) {
//     // Send HTTP-only cookie
//     res.cookie("token", token, {
//       path: "/",
//       httpOnly: true,
//       expires: new Date(Date.now() + 1000 * 86400), // 1 day
//       sameSite: "none",
//       secure: true,
//     });
//   }
//   if (user && passwordIsCorrect) {
//     const { _id, name, email, photo, phone, bio } = user;
//     res.status(200).json({
//       _id,
//       name,
//       email,
//       photo,
//       phone,
//       bio,
//       token,
//     });
//   } else {
//     res.status(400);
//     throw new Error("Invalid email or password");
//   }
// });

// //LOgOut User
// const logout = asyncHandler(async (req, res) => {
//   res.cookie("token", "", {
//     path: "/",
//     httpOnly: true,
//     expires: new Date(0),
//     sameSite: "none",
//     secure: true,
//   });
//   return res.status(200).json({ message: "User logged out" });
// });

// //Get user data
// const getUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);

//   if (user) {
//     const { _id, name, email, photo, phone, bio } = user;
//     res.status(200).json({
//       _id,
//       name,
//       email,
//       photo,
//       phone,
//       bio,
//     });
//   } else {
//     res.status(400);
//     throw new Error("User Not Found");
//   }
// });

// const updateUser = asyncHandler(async (req, res) => {
//   // res.send("update user");
//   const user = await User.findById(req.user._id);

//   if (user) {
//     const { name, email, photo, phone, bio } = user;
//     user.email = email;
//     user.name = req.body.name || name;
//     user.photo = req.body.photo || photo;
//     user.phone = req.body.phone || phone;
//     user.bio = req.body.bio || bio;

//     const updatedUser = await user.save();
//     res.status(200).json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       photo: updatedUser.photo,
//       phone: updatedUser.phone,
//       bio: updatedUser.bio,
//     });
//   } else {
//     res.status(400);
//     throw new Error("user not found");
//   }
// });

// module.exports = {
//   registerUser,
//   loginUser,
//   logout,
//   getUser,
//   updateUser,
// };

const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be at least 6 characters");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = { registerUser };