import React, { useState } from "react";
import bug from "./pictures/bug.png";
import addpdct from "./pictures/addpdct.png";
import ndot from "./pictures/ndot.png";
import tbar from "./pictures/tbar.png";
import dashicon from "./pictures/dashicon.png";
import account from "./pictures/account.png";
import { Link } from "react-router-dom";
import styles from "./mycss.module.css";

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <>
      {/* dashboard ko yeha bata  */}
      <div
        style={{
          height: "870px",
          width: "250px",
          backgroundColor: "#e7e3e2",
        }}>
        <div
          style={{
            height: "60px",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            gap: "140px",
            left: "30%",
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
          style={{
            display: "flex",
            border: "1px solid",
            borderColor: "gray",
            backgroundColor:
              activeItem === "Dashboard" ? "rgb(179, 175, 175)" : "transparent",
          }}
          onClick={() => setActiveItem("Dashboard")}>
          <img
            style={{ height: "40px", marginLeft: "5px" }}
            src={ndot}
            alt="img"
          />
          <div style={{ marginTop: "12px", marginLeft: "20px" }}>
            <Link
            style={{textDecoration:'none',color:'black'}}
              to="#warehouse"
              onClick={(e) => {
                e.preventDefault();
                window.open("/warehouse", "_self");
              }}>
              Dashboard
            </Link>
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{
            display: "flex",
            border: "1px solid",
            borderColor: "gray",
            backgroundColor:
              activeItem === "AddProduct"
                ? "rgb(179, 175, 175)"
                : "transparent",
          }}
          onClick={() => setActiveItem("AddProduct")}>
          <img
            src={addpdct}
            alt="img"
            style={{ height: "40px", marginLeft: "5px" }}
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            <Link
            style={{textDecoration:'none',color:'black'}}
              to="#addproduct"
              onClick={(e) => {
                e.preventDefault();
                window.open("/addproduct", "_self");
                
              }}>
              Add Product
            </Link>
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{
            display: "flex",
            border: "1px solid",
            borderColor: "gray",
            backgroundColor:
              activeItem === "Accounts" ? "rgb(179, 175, 175)" : "transparent",
          }}
          onClick={() => setActiveItem("Accounts")}>
          <img
            style={{ height: "40px", marginLeft: "1px" }}
            src={account}
            alt="img"
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            <Link
            style={{textDecoration:'none',color:'black'}}
              to="#account"
              onClick={(e) => {
                e.preventDefault();
                window.open("/account", "_self");
              }}>
              Accounts
            </Link>
          </div>
        </div>
        <div
          className={styles.dashboard}
          style={{
            display: "flex",
            border: "1px solid",
            borderColor: "gray",
            backgroundColor:
              activeItem === "ReportBug" ? "rgb(179, 175, 175)" : "transparent",
          }}
          onClick={() => setActiveItem("ReportBug")}>
          <img
            style={{ height: "40px", marginLeft: "5px" }}
            src={bug}
            alt="img"
          />
          <div
            style={{ marginTop: "10px", marginLeft: "20px", color: "black" }}>
            <Link
            style={{textDecoration:'none',color:'black'}}
              to="#reportbug"
              onClick={(e) => {
                e.preventDefault();
                window.open("/reportbug", "_self");
              }}>
              Report Bug
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
