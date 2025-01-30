import React, { useState, useEffect } from "react";
import styles from "./mycss.module.css";
import cart from "./pictures/cart.png";
import dollar from "./pictures/dollar.png";
import stock from "./pictures/stock.png";
import category from "./pictures/category.png";
import remove from "./pictures/delete.png";
import Mainlayout from "./shared/Mainlayout";

const Warehouse = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [storeValue, setStoreValue] = useState(0);
  const [uniqueCategories, setUniqueCategories] = useState(0);
  const [outOfStockCount, setOutOfStockCount] = useState(0);
  const [inventoryData, setInventoryData] = useState([
    { id: 1, name: "8848 vodka", category: "vodka", price: 20, quantity: 10 },
    { id: 2, name: "Budviser", category: "Beer", price: 20, quantity: 15 },
    { id: 3, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    { id: 4, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    { id: 5, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    { id: 6, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    { id: 7, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    { id: 8, name: "Ruslan vodka", category: "liquor", price: 20, quantity: 0 },
    {
      id: 9,
      name: "Khukuri Rum",
      category: "Whiskey",
      price: 20,
      quantity: 12,
    },
    { id: 10, name: "Signature ", category: "liquor", price: 20, quantity: 8 },
  ]);

  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const [itemsPerPage] = useState(5);  // Set number of items per page
  useEffect(() => {
    const total = inventoryData.reduce((sum, item) => sum + item.quantity, 0);
    setTotalQuantity(total);
    const valuation = inventoryData.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setStoreValue(valuation);
    const categoryCount = new Set(inventoryData.map((item) => item.category))
      .size;
    setUniqueCategories(categoryCount);
    const outOfStock = inventoryData.filter(
      (item) => item.quantity === 0
    ).length;
    setOutOfStockCount(outOfStock);
  }, [inventoryData]);
  const deleteRow = (id) => {
    setInventoryData((prevData) => prevData.filter((item) => item.id !== id));
  };
    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = inventoryData.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(inventoryData.length / itemsPerPage);
  
    const nextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const prevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  return (
    <>
      <Mainlayout>
        <div>
          <div
            style={{
              height: "450px",
              marginTop: "-678px",
            }}></div>

          <div
            style={{
              height:'727px',
              width: "1360px",
              padding:'30px',
              backgroundColor: "#e7e3e2",
              marginLeft: "260px",
              marginTop: "-582px",
              borderRadius: "10px",
            }}>
            <div
              style={{
                backgroundColor: "#e7e3e2",
                height: "80px",
                marginLeft: "23px",
                fontSize: "40px",
                alignContent: "center",
                fontFamily: "serif",
               
              }}>
              Inventory Stats
            </div>
            <div style={{ height: "70px", display: "flex", marginTop: "-5px" }}>
              <div
                className={styles.hovereffect}
                style={{
                  backgroundColor: "#fa03ed",
                  borderRadius:'8px',
                  height: "80px",
                  width: "300px",
                  marginTop: "9px",
                  marginLeft: "25PX",
                  color: "white",
                }}>
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    position: "absolute",
                    height: "48px",
                    width: "55px",
                    marginTop: "15px",
                    marginLeft: "5px",
                  }}
                />
                <div style={{ marginLeft: "75px", marginTop: "19px",fontSize:'20px' }}>
                  Total Products
                  <div>{totalQuantity}</div>
                </div>
              </div>
              <div
                className={styles.hovereffect}
                style={{
                  backgroundColor: "#56fc05",
                  borderRadius:'8px',
                  height: "80px",
                  width: "300px",
                  marginTop: "9px",
                  marginLeft: "25PX",
                  color: "white",
                }}>
                <img
                  src={dollar}
                  alt="cart"
                  style={{
                    position: "absolute",
                    height: "48px",
                    width: "55px",
                    marginTop: "15px",
                    marginLeft: "5px",
                  }}
                />
                <div style={{ marginLeft: "75px", marginTop: "19px" ,fontSize:'20px' }}>
                  Total Store Value
                  <div>{storeValue}</div>
                </div>
              </div>
              <div
                className={styles.hovereffect}
                style={{
                  backgroundColor: "#fc0590",
                  borderRadius:'8px',
                  height: "80px",
                  width: "300px",
                  marginTop: "9px",
                  marginLeft: "20PX",
                  color: "white",
                }}>
                <img
                  src={stock}
                  alt="cart"
                  style={{
                    position: "absolute",
                    height: "68px",
                    width: "68px",
                    marginTop: "7px",
                    marginLeft: "5px",
                  }}
                />
                <div style={{ marginLeft: "75px", marginTop: "19px",fontSize:'20px' }}>
                  out of stock
                  <div>{outOfStockCount}</div>
                </div>
              </div>
              <div
                className={styles.hovereffect}
                style={{
                  backgroundColor: "#05a2fc",
                  borderRadius:'8px',
                  height: "80px",
                  width: "300px",
                  marginTop: "9px",
                  marginLeft: "20PX",
                  color: "white",
                }}>
                <img
                  src={category}
                  alt="cart"
                  style={{
                    position: "absolute",
                    height: "48px",
                    width: "55px",
                    marginTop: "15px",
                    marginLeft: "5px",
                  }}
                />
                <div style={{ marginLeft: "75px", marginTop: "19px",fontSize:'20px' }}>
                  All Categories
                  <div>{uniqueCategories}</div>
                </div>
              </div>
            </div>

            <div
              style={{
                backgroundColor: "#e7e3e2",
                height: "120px",
               marginTop:'10px',
                fontFamily: "garamond",
                alignContent: "center",
                marginLeft: "24px",
                fontSize:'25px',
                
              }}>
              Inventory Items :
            </div>
            <div >
              <table
                style={{
                  width: "98%",
                  borderCollapse: "collapse",
                  marginLeft: "7px",
                }}>
                <thead>
                  <tr style={{ backgroundColor: "#05a2fc" }}>
                    <th>s/n</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th> Quantity</th>
                    <th>Value</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* dummy data */}
                  {/* <tr>
              <td>1</td>
              <td>8848 vodka</td>
              <td>liquor</td>
              <td>$20</td>
              <td>10</td>
              <td>200</td>
              <td> Done</td>
            </tr>
            <tr>
              <td>2</td>
              <td>8848 vodka</td>
              <td>liquor</td>
              <td>$20</td>
              <td>10</td>
              <td>200</td>
              <td> Done</td>
            </tr>
            <tr>
              <td>3</td>
              <td>8848 vodka</td>
              <td>liquor</td>
              <td>$20</td>
              <td>10</td>
              <td>200</td>
              <td> Done</td>
            </tr>
            <tr>
              <td>4</td>
              <td>8848 vodka</td>
              <td>liquor</td>
              <td>$20</td>
              <td>10</td>
              <td>200</td>
              <td> Done</td>
            </tr>
            <tr>
              <td>5</td>
              <td>8848 vodka</td>
              <td>liquor</td>
              <td>$20</td>
              <td>10</td>
              <td>200</td>
              <td> Done</td>
            </tr> */}
                  {currentItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <img
                          src={remove}
                          alt="delete"
                          style={{
                            cursor: "pointer",
                            width: "20px",
                            height: "20px",
                            marginLeft: "15px",
                          }}
                          onClick={() => deleteRow(item.id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
                {/* Pagination Controls */}
                <div style={{ marginTop: "70px", textAlign: "center",fontSize:'25px' }}>
                <button onClick={prevPage} disabled={currentPage === 1} style={{fontSize:'20px',backgroundColor:"#05a2fc"}}>
                  Previous
                </button>
                <span style={{ margin: "0 10px" }}>
                  Page {currentPage} of {totalPages}
                </span>
                <button onClick={nextPage} disabled={currentPage === totalPages}  style={{fontSize:'20px' ,backgroundColor:"#05a2fc"}}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </>
  );
};

export default Warehouse;
