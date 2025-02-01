// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// // How to create a model
// // Step 1 :require mongoose
// // Step 2 :Create a mongoose schema (structure of a user)
// // Step 3 : Create a model


// const userSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       private: true,
//       minLength: [6, "Password must be at least 6 characters"],
//       // maxLength: [23, "Password must not be at more than 23 characters"],
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       match: [
//         /^([a-z0-9\+\._\/&!][-a-z0-9\+\._\/&!]*)@(([a-z0-9][-a-z0-9]*\.)([-a-z0-9]+\.)*[a-z]{2,})$/i,
//       ],
//       trim: true,
//     },
//     photo: {
//       type: String,
//       required: true,
//       default:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_oL1l60gN7zHc_fMS11OeFR-mLDi3DgjNg&s",
//     },
//     phone:{
//         type:String,
//         default:"+977"
//     },
//     bio: {
//       type: String,
//       maxLength: [255, "Bio must not be more than 255 characters"],
//       default: "bio",
//     },
//   },
//   { timeStamps: true }
// );

// //Encrypt password before saving it to database
// userSchema.pre("save", async function(next){
//   // we check if we havenot modifed the password then we doesnot need to change hash 
//   // pasword all the time
//   if(!this.isModified("password")){
//     return next();

//   }
//   //hash password
//    const salt = await  bcrypt.genSalt(10)
//    const hashedPassword = await bcrypt.hash(this.password, salt);
//    this.password = hashedPassword;
//    next();
// })


// const User = mongoose.model('User',userSchema);
// module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
