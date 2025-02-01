// import React, { useState } from "react";
// import logo from "./pictures/original.webp";
// import api from "../api";

// const SignupPage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }
//     try {
//       const response = await api.signup(formData);
//       console.log("Signup successful:", response);
//       // Save the token in localStorage or context
//       localStorage.setItem("token", response.token);
//       // Redirect to login or dashboard
//     } catch (error) {
//       console.error("Signup failed:", error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.logoContainer}>
//           <img src={logo} alt="Logo" style={styles.logo} />
//         </div>
//         <h3 style={styles.heading}>Create Account</h3>
//         <div style={styles.inputGroup}>
//           <label htmlFor="fullName" style={styles.label}>
//             Full Name
//           </label>
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Enter your full name"
//             value={formData.fullName}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
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
//             required
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="password" style={styles.label}>
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Create a password"
//             value={formData.password}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.inputGroup}>
//           <label htmlFor="confirmPassword" style={styles.label}>
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="Confirm your password"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Sign Up
//         </button>
//         <div style={styles.loginLink}>
//           Already have an account?{" "}
//           <span style={styles.link} onClick={() => window.history.back()}>
//             Login
//           </span>
//         </div>
//       </form>
//     </div>
//   );
// };

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
//   button: {
//     width: "100%",
//     padding: "10px",
//     backgroundColor: "#05a2fc",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontSize: "16px",
//     marginBottom: "15px",
//     transition: "background-color 0.3s ease",
//   },
//   loginLink: {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#555",
//   },
//   link: {
//     color: "#05a2fc",
//     cursor: "pointer",
//     textDecoration: "underline",
//   },
// };

// export default SignupPage;


import React, { useState } from "react";
import logo from "./pictures/original.webp";
import { registerUser } from "../api"; // Import the API function

const SignupPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await registerUser(formData);
      if (response.data) {
        alert("Signup successful!");
        // Redirect to login or dashboard
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.logoContainer}>
          <img src={logo} alt="Logo" style={styles.logo} />
        </div>
        <h3 style={styles.heading}>Create Account</h3>
        <div style={styles.inputGroup}>
          <label htmlFor="fullName" style={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
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
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="confirmPassword" style={styles.label}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Sign Up
        </button>
        <div style={styles.loginLink}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => window.history.back()}>
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

// Styles remain the same
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
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#05a2fc",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "15px",
    transition: "background-color 0.3s ease",
  },
  loginLink: {
    textAlign: "center",
    fontSize: "14px",
    color: "#555",
  },
  link: {
    color: "#05a2fc",
    cursor: "pointer",
    textDecoration: "underline",
  },
};

export default SignupPage;