import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      style={{
        height: "819px",
        backgroundColor: "#005691",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ color: "white", textAlign: "center" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "white", display: "block" }}>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "white", display: "block" }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "white", display: "block" }}>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ color: "white", display: "block" }}>
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#004b73",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
