import React from "react";

const AddProduct = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Product</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Category</label>
          <select style={styles.input}>
            <option>Select Category</option>
            <option>Liquor</option>
            <option>Food</option>
            <option>Beverages</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price</label>
          <input type="number" placeholder="Enter price" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Description</label>
          <textarea
            placeholder="Write Description Of Product"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    // color: "#7c3aed", // Updated color
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    color: "#555",
    fontWeight: "bold",
    fontSize: "14px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#7c3aed", 
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#6d28d9", 
  },
};

export default AddProduct;

// import React, { useState } from "react";
// import { addProduct } from "../api"; // Import the API function

// const AddProduct = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     price: "",
//     quantity: "",
//     description: "",
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
//       const response = await addProduct(formData);
//       if (response.data) {
//         alert("Product added successfully!");
//         // Reset form
//         setFormData({
//           name: "",
//           category: "",
//           price: "",
//           quantity: "",
//           description: "",
//         });
//       }
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product. Please try again.");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2 style={styles.heading}>Add New Product</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Name</label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter product name"
//             value={formData.name}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           >
//             <option value="">Select Category</option>
//             <option value="Liquor">Liquor</option>
//             <option value="Food">Food</option>
//             <option value="Beverages">Beverages</option>
//           </select>
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Price</label>
//           <input
//             type="number"
//             name="price"
//             placeholder="Enter price"
//             value={formData.price}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Quantity</label>
//           <input
//             type="number"
//             name="quantity"
//             placeholder="Enter quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label style={styles.label}>Product Description</label>
//           <textarea
//             name="description"
//             placeholder="Write Description Of Product"
//             value={formData.description}
//             onChange={handleChange}
//             style={styles.input}
//             required
//           />
//         </div>
//         <button type="submit" style={styles.button}>
//           Add Product
//         </button>
//       </form>
//     </div>
//   );
// };

// // Styles remain the same
// const styles = {
//   container: {
//     backgroundColor: "white",
//     padding: "20px",
//     borderRadius: "8px",
//     boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
//     maxWidth: "600px",
//     margin: "0 auto",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "24px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
//   formGroup: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "5px",
//   },
//   label: {
//     color: "#555",
//     fontWeight: "bold",
//     fontSize: "14px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #ddd",
//     borderRadius: "4px",
//     fontSize: "14px",
//   },
//   button: {
//     backgroundColor: "#7c3aed",
//     color: "white",
//     padding: "10px",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     marginTop: "10px",
//     fontSize: "16px",
//     transition: "background-color 0.3s ease",
//   },
// };

// export default AddProduct;
