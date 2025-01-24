import React from "react";
import styles from "./mycss.module.css";
import cart from "./pictures/cart.png";
import dollar from "./pictures/dollar.png";
import stock from "./pictures/stock.png";
import category from "./pictures/category.png";
import bug from "./pictures/bug.png";
import addpdct from "./pictures/addpdct.png";
import ndot from "./pictures/ndot.png";
import tbar from "./pictures/tbar.png";
import dashicon from "./pictures/dashicon.png";
import account from "./pictures/account.png";

const Warehouse = () => {
  return (
    <>
    {/* dashboard ko yeha bata  */}
      <div
        style={{ height: "620px", width: "250px", backgroundColor: "#e7e3e2" }}>
        <div
          style={{
            height: "60px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            gap: "140px",
          }}>
          <img
            src={dashicon}
            alt=" img"
            style={{ height: "40px", width: "40px", marginLeft: "20px" }}
          />
          <img src={tbar} alt="img" style={{ height: "40px", width: "40px" }} />
        </div>
        <div
          className={styles.dashboard}
          style={{ display: "flex", border: "1px solid", borderColor: "gray" }}>
          <img
            style={{ height: "40px", marginLeft: "5px" }}
            src={ndot}
            alt="img"
          />
          <div
            style={{ marginTop: "12px", marginLeft: "20px", color: "black" }}>
            Dashboard
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{ display: "flex", border: "1px solid", borderColor: "gray" }}>
          <img
            src={addpdct}
            alt="img"
            style={{ height: "40px", marginLeft: "5px" }}
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            Add Product
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{ display: "flex", border: "1px solid", borderColor: "gray" }}>
          <img
            style={{ height: "40px", marginLeft: "1px" }}
            src={account}
            alt="img"
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            Accounts
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{ display: "flex", border: "1px solid", borderColor: "gray" }}>
          <img
            style={{ height: "40px", marginLeft: "5px" }}
            src={bug}
            alt="img"
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            Report Bug
          </div>
        </div>
      </div>
      {/* warehouse ko yeha bata xa */}
      <div
        style={{
          height: "530px",
          width: "800px",
          backgroundColor: "#e7e3e2",
          position: "absolute",
          top: "7%",
          left: "21%",
        }}>
        <div
          style={{
            backgroundColor: "#e7e3e2",
            padding: "20px",
            fontSize: "20px",
            alignContent: "center",
            fontFamily: "serif",
          }}>
          Inventory Stats
        </div>
        <div style={{ height: "80px", display: "flex" }}>
          <div
            className={styles.hovereffect}
            style={{
              backgroundColor: "#fa03ed",
              height: "60px",
              width: "170px",
              marginTop: "9px",
              marginLeft: "25PX",
              color: "white",
            }}>
            <img
              src={cart}
              alt="cart"
              style={{
                position: "absolute",
                height: "28px",
                width: "35px",
                marginTop: "15px",
                marginLeft: "5px",
              }}
            />
            <div style={{ marginLeft: "45px", marginTop: "10px" }}>
              Total Products
              <div>2</div>
            </div>
          </div>
          <div
            className={styles.hovereffect}
            style={{
              backgroundColor: "#56fc05",
              height: "60px",
              width: "170px",
              marginTop: "9px",
              marginLeft: "25PX",
              color: "white",
            }}>
            <img
              src={dollar}
              alt="cart"
              style={{
                position: "absolute",
                height: "30px",
                width: "35px",
                marginTop: "15px",
                marginLeft: "5px",
              }}
            />
            <div style={{ marginLeft: "45px", marginTop: "10px" }}>
              Total Store Value
              <div>2</div>
            </div>
          </div>
          <div
            className={styles.hovereffect}
            style={{
              backgroundColor: "#fc0590",
              height: "60px",
              width: "170px",
              marginTop: "9px",
              marginLeft: "20PX",
              color: "white",
            }}>
            <img
              src={stock}
              alt="cart"
              style={{
                position: "absolute",
                height: "45px",
                width: "40px",
                marginTop: "7px",
                marginLeft: "5px",
              }}
            />
            <div style={{ marginLeft: "45px", marginTop: "10px" }}>
              out of stock
              <div>2</div>
            </div>
          </div>
          <div
            className={styles.hovereffect}
            style={{
              backgroundColor: "#05a2fc",
              height: "60px",
              width: "170px",
              marginTop: "9px",
              marginLeft: "20PX",
              color: "white",
            }}>
            <img
              src={category}
              alt="cart"
              style={{
                position: "absolute",
                height: "28px",
                width: "35px",
                marginTop: "15px",
                marginLeft: "5px",
              }}
            />
            <div style={{ marginLeft: "45px", marginTop: "10px" }}>
              All Categories
              <div>2</div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#e7e3e2",
            padding: "25px",
            alignContent: "center",
            fontFamily: "garamond",
          }}>
          Inventory Items :
        </div>
        <div style={{ height: "250px" }}>
          <table
            style={{
              width: "98%",
              borderCollapse: "collapse",
              marginLeft: "7px",
            }}>
            <tr style={{ backgroundColor:"#05a2fc" }}>
              <th>s/n</th>
              <th>Name</th>
              <th>Categori</th>
              <th>Price</th>
              <th> Quantity</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
            <tr>
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
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default Warehouse;
