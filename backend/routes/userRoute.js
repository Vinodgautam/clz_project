// const express = require("express");
// const { registerUser, loginUser, logout, getUser, updateUser } = require("../controllers/userController");
// const protect = require("../middleWare/authMiddleware");
// const router = express.Router();





// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/logout', logout);
// router.get("/getuser",protect ,getUser);
// // router.get("/loggedin",protect );
// router.patch("/updateuser",protect, updateUser);
// module.exports = router;

const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

// Register route
router.post("/register", registerUser);

module.exports = router;