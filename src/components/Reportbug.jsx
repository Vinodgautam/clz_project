import React, { useState } from "react";
import Mainlayout from "./shared/Mainlayout";
import dashicon from './pictures/dashicon.png'

const Reportbug = () => {
  const [bugDetails, setBugDetails] = useState({
    title: "",
    description: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBugDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bug Report Submitted:", bugDetails);
    setIsSubmitted(true);
    // Add your logic for sending bug details to a server or backend here
  };

  return (
    <Mainlayout>
      
      <div
        style={{
          height: "747px",
          width: "1380px",
          marginTop: "-810px",
          marginLeft: "260px",
          padding: "20px",
          backgroundColor: "#e7e3e2",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          
        }}>
           <img src={dashicon} alt="icon" style={{height:'80px', marginLeft:"450px",marginTop:'40px'}} />
        <h2 style={{textAlign:'center',fontSize:'40px', color:'#b20094',marginTop:'-67px'}}>Report a Bug</h2>
        {isSubmitted ? (
          <p style={{ color: "green" }}>
            Thank you for reporting the bug. We'll look into it!
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="title"
                style={{ display: "block", marginBottom: "5px" , fontSize:'20px',color:' #601a40'}}>
               <b> Bug Title:</b>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={bugDetails.title}
                onChange={handleChange}
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height:'50px'
                }}
                required
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="description"
                style={{ display: "block", marginBottom: "5px", fontSize:'20px',color:" #601a40" }}>
              <b>  Bug Description:</b>
              </label>
              <textarea
                id="description"
                name="description"
                value={bugDetails.description}
                onChange={handleChange}
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height:'100px'
                }}
                rows="4"
                required
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                htmlFor="email"
                style={{ display: "block", marginBottom: "5px" , fontSize:'20px',color:" #601a40"}}>
               <b> Your Email (optional):</b>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={bugDetails.email}
                onChange={handleChange}
                style={{
                  width: "95%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  height:'50px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "15px 50px",
                backgroundColor: " #601a40",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize:'15px'
              }}>
             <b> Submit Bug</b>
            </button>
          </form>
        )}
      </div>
    </Mainlayout>
  );
};

export default Reportbug;
