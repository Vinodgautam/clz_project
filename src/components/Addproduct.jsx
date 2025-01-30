import React, { useState } from "react";
import Mainlayout from "./shared/Mainlayout";
import dashicon from './pictures/dashicon.png'

const Addproduct = () => {
  const [data, setData] = useState({
    product: "",
    category: "",
    price: "",
    quantity: "",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const done = (e) => {
    e.preventDefault();
    console.log("Product Name:", data.product);
    console.log("Category:", data.category);
    console.log("Price:", data.price);
    console.log("Quantity:", data.quantity);
  };
  return (
    <>
      <Mainlayout>
        <div
          style={{
            height: "747px",
            width: "1380px",
            marginTop: "-810px",
            marginLeft: "260px",
            backgroundColor: "#e7e3e2",
            borderRadius: "10px",
            padding: "20px",
          }}>
            <img src={dashicon} alt="icon" style={{height:'80px', marginLeft:"420px",marginTop:'40px'}} />
          <h1 style={{ textAlign: "center",fontSize:'40px', color:'#b20094',marginTop:"-65px"}}>Add new product</h1>

          <div
            style={{
              marginLeft: "240px",
              marginTop: "60px",
              backgroundColor: "rgb(179, 175, 175)",
              height: "500px",
              width: "900px",
              borderRadius: "40px",
            }}>
            <h2 style={{ textAlign: "center", padding: "25px",fontSize:'30px',color:' black' }}>
              New Product Details :
            </h2>
            <form onSubmit={done}>
              <div style={{ marginLeft: "85px" }}>
                <div style={{ height: "60px" ,fontSize:"20px" ,color:' #601a40'}}>
                  <label htmlFor="product" name="product">
                   <b> Product Name</b>{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    name="product"
                    value={data.product}
                    onChange={handleChange}
                    style={{
                      borderRadius: "50px",
                      border: "2px",
                      backgroundColor: "#eff5f6",
                      textAlign: "center",
                      width: "600px",
                      height: "40px",
                    }}
                    
                    required
                  />
                </div>
                <div style={{ height: "60px",fontSize:"20px",color:' #601a40' }}>
                  <label htmlFor="category" name="category">
                  <b> Category</b>
                  </label>
                  <input
                    type="text"
                    placeholder="category"
                    name="category"
                    value={data.category}
                    onChange={handleChange}
                    style={{
                      borderRadius: "50px",
                      border: "2px",
                      backgroundColor: "#eff5f6",
                      textAlign: "center",
                      width: "600px",
                      height: "40px",
                      marginLeft: "52px",
                    }}
                    required
                  />
                </div>
                <div style={{ height: "60px" ,fontSize:"20px",color:' #601a40'}}>
                  <label
                    htmlFor="price"
                    name="price"
                  >
                    
                    <b> Price</b>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={data.price}
                    onChange={handleChange}
                    style={{
                      borderRadius: "50px",
                      border: "2px",
                      backgroundColor: "#eff5f6",
                      textAlign: "center",
                      width: "600px",
                      height: "40px",
                      marginLeft: "85px",
                    }}
                    required
                  />
                </div>
                <div style={{ height: "60px",fontSize:"20px",color:' #601a40' }}>
                  <label
                    htmlFor="quantity"
                    name="quantity"
                  >
                    <b>Quantity</b>
                  </label>
                  <input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    value={data.quantity}
                    onChange={handleChange}
                    style={{
                      borderRadius: "50px",
                      border: "2px",
                      backgroundColor: "#eff5f6",
                      textAlign: "center",
                      width: "600px",
                      height: "40px",
                      marginLeft: "56px",
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: " #601a40",
                    color: "white",
                    textAlign: "center",
                    borderRadius: "50px",
                    width: "200px",
                    border: "2px",
                    height: "40px",
                    marginLeft: "280px",
                    marginTop: "20px",
                  }}>
                 <b> Add Product</b>
                </button>
              </div>
            </form>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default Addproduct;
