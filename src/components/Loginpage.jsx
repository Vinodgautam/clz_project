import React, { useState } from "react";
// import styles from "./mycss.module.css";
import myImage from "./pictures/image.png";
import image from "./pictures/logo.png";
import pwLogo from "./pictures/pwlogo.png";
import "../App.css";
const Loginpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const done = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <div
      style={{
        backgroundColor: "#e7e3e2",
        display: "flex",
        justifyContent: "center",
        height: "70vh",
        width: "355px",
        position: "absolute",
        top: "15%",
        left: "35%",
        borderRadius: "10px",
      }}>
      <form onSubmit={done}>
        <div>
          <img
            src={myImage}
            alt="pic"
            style={{
              height: "60px",
              width: "60px",
              marginTop: "60px",
              justifySelf: "center",
              display: "flex",
            }}
          />
        </div>
        <h3 style={{ textAlign: "center" }}>Login to System</h3>
        <div style={{ height: "40px" }}>
          <label
            htmlFor="email"
            name="email"
            style={{ height: "40px" }}></label>
          <img
            src={image}
            alt="logo"
            style={{
              position: "absolute",
              left: "39px",
              top: "41.5%",
              transform: "translately(-50%)",
              height: "12px",
              width: "16px",
            }}
          />
          <input
            type="email"
            placeholder="abc123@gmail.com"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              borderRadius: "50px",
              border: "2px",
              backgroundColor: "#eff5f6",
              textAlign: "center",
              width: "300px",
              height: "20px",
            }}
          />
        </div>
        <div style={{ height: "40px" }}>
          <label htmlFor="password"></label>
          <img
            src={pwLogo}
            alt="pwlgo"
            style={{
              position: "absolute",
              left: "39px",
              top: "50.5%",
              transform: "translately(-50%)",
              height: "13px",
              width: "14px",
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              borderRadius: "50px",
              backgroundColor: "#eff5f6",
              border: "2px",
              textAlign: "center",
              width: "300px",
              height: "20px",
            }}
          />
        </div>
        <div style={{textAlign:'end', fontSize:'12px'}}>Forgot password?</div><br />
        <button
          type="submit"
          style={{
            backgroundColor: "#121313",
            color: "white",
            textAlign: "center",
            borderRadius: "50px",
            width: "300px",
            border: "2px",
            height: "20px",
          }}>
          Login
        </button>

        <h3 style={{ textAlign: "center", height: "20px" }}>or</h3>
        <button
          type="submit"
          style={{
            textAlign: "center",
            backgroundColor: "##eff5f6",
            borderRadius: "5px",
            width: "300px",
            height: "20px",
            border: "2px",
          }}>
          Login with Email Link
        </button>
      </form>
    </div>
  );
};

export default Loginpage;
