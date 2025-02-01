// // const express = require("express");
// // const PORT = process.env.PORT || 8000;
// // const mongoose = require("mongoose");
// // const dotenv = require("dotenv").config();
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const userRoute = require("./routes/userRoute");
// // const errorHandler = require("./middleWare/errorMiddleware");
// // const cookieParser = require("cookie-parser");
// // const productRoute = require("./routes/productRoute");



// // const app = express();

// // //MiddleWare
// // app.use(express.json());
// // app.use(cookieParser());
// // app.use(express.urlencoded({ extended: false }));
// // app.use(bodyParser.json());
// // app.use(cors());

// // //Routes MiddleWare
// // app.use("/api/users", userRoute);
// // app.use("/api/products", productRoute);
// // app.get("/", (req, res) => {
// //   //req contain all data for request
// //   //res contain all data for the respone
// //   res.send("HELLO WORLD");
// // });



// // //Error MiddleWare
// // app.use(errorHandler);

// // mongoose
// //   .connect(process.env.MONGO_URL)
// //   .then(() => {
// //     app.listen(PORT, () => {
// //       console.log(`Connected to ${PORT}`);
// //     });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });
// // // app.listen(PORT, () => {
// // //   console.log("APP is running on port " + PORT);
// // // });

// const express = require("express");
// const PORT = process.env.PORT || 8000;
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const userRoute = require("./routes/userRoute");
// const productRoute = require("./routes/productRoute");
// const errorHandler = require("./middleWare/errorMiddleware");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: false }));

// // CORS Configuration
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Allow requests from this origin
//     credentials: true, // Allow cookies and credentials
//   })
// );

// // Handle preflight requests
// app.options("*", cors());

// // Routes Middleware
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);

// // Test route
// app.get("/", (req, res) => {
//   res.send("HELLO WORLD");
// });

// // Error Middleware
// app.use(errorHandler);

// // Connect to MongoDB and start the server
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error connecting to MongoDB:", err);
//   });

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const errorHandler = require("./middleWare/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// CORS Configuration
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from frontend
    credentials: true, // Allow cookies
  })
);

// Routes
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// Error Middleware
app.use(errorHandler);

// Connect to MongoDB and start the server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });