import React from "react";
import styles from "./mycss.module.css";
import bug from './pictures/bug.png'
import addpdct from './pictures/addpdct.png'
import ndot from './pictures/ndot.png'
import tbar from './pictures/tbar.png'
import dashicon from './pictures/dashicon.png'
import account from './pictures/account.png'

const Dashboard = () => {
  return (
    <>
  
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
          <img
            src={tbar}
            alt="img"
            style={{ height: "40px", width: "40px" }}
          />
        </div>
        <div
          className={styles.dashboard} 
          style={{ display: "flex", border: "1px solid", borderColor: "gray" }}>
          <img style={{ height: "40px" ,marginLeft:"5px"}} src={ndot} alt="img" />
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
     
    </>
  );
};

export default Dashboard;
