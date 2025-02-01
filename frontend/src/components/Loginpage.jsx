import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./pictures/original.webp";

const Loginpage = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Important for cookies
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        // Login successful
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/warehouse');
      } else {
        // Login failed
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

    // ... 

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <h3 style={styles.heading}>Login to System</h3>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.forgotPassword}>Forgot password?</div>
         <button type="button" style={styles.emailLinkButton} onClick={handleSignUp}>
      Sign Up
    </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e7e3e2",
  },
  form: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  logoContainer: {
    textAlign: "center",
    marginBottom: "20px",
  },
  logo: {
    height: "60px",
    width: "60px",
    borderRadius: "50%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  forgotPassword: {
    textAlign: "right",
    fontSize: "12px",
    color: "#05a2fc",
    marginBottom: "15px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#05a2fc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  orText: {
    textAlign: "center",
    margin: "15px 0",
    fontSize: "16px",
    color: "#555",
  },
  emailLinkButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f4f4f4",
    color: "#333",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Loginpage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "./pictures/original.webp";
// import { loginUser } from "../api"; // Import the API function

// const Loginpage = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(formData);
//       if (response.data) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         navigate("/warehouse");
//       } else {
//         alert(response.message || "Login failed");
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//       alert("Login failed. Please try again.");
//     }
//   };

//   const handleSignUp = () => {
//     navigate("/signup");
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.logoContainer}>
//           <img src={logo} alt="Logo" style={styles.logo} />
//         </div>
//         <h3 style={styles.heading}>Login to System</h3>
//         <div style={styles.inputGroup}>
//           <label htmlFor="email" style={styles.label}>
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             value={formData.email}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//           />
//         </div>
//         <div style={styles.forgotPassword}>Forgot password?</div>
//         <button
//           type="button"
//           style={styles.emailLinkButton}
//           onClick={handleSignUp}
//         >
//           Sign Up
//         </button>
//         <button type="submit" style={styles.button}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles remain the same
// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#e7e3e2",
//   },
//   form: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     width: "100%",
//     maxWidth: "400px",
//   },
//   logoContainer: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   logo: {
//     height: "60px",
//     width: "60px",
//     borderRadius: "50%",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//     color: "#333",
//   },
//   inputGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     fontSize: "14px",
//     color: "#555",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "14px",
//   },
//   forgotPassword: {
//     textAlign: "right",
//     fontSize: "12px",
//     color: "#05a2fc",
//     marginBottom: "15px",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#05a2fc",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
//   emailLinkButton: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#f4f4f4",
//     color: "#333",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
// };

// export default Loginpage;