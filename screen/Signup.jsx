import { useNavigate } from 'react-router-dom';
import axios from "axios";
// import { useState } from "react";

import React, { useState } from 'react';
import { div } from 'framer-motion/client';
const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [employeeCode, setEmployeeCode] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Password and confirm password do not match");
      return;
    }
    if (fullName == '' || email == '' || password == confirmPassword == '' || company == '' || role == '') {
      alert("Please fill in all fields.");
      return;
    }

    // axios.post("http://localhost:5500/add-user", {
    //   // ya bhot important ha is ka binna page show he nhi ho ga 
    //   //or ya sara paylode ha yani object bana kr data ko send krta api par  
    //   name: fullName,
    //     email: email,
    //     password: password,
    //     role: parseInt(role),
    //     company: parseInt(company),
    //     employee_code: employeeCode,
    //     created_at: new Date().toISOString(),
    //     created_by: 1,
    //     updated_at: new Date().toISOString(),
    //     updated_by: 1,
    //   })

    const payload = {

      //  // is ko payload or object bhi kha jata ha 

      name: fullName,
      email: email,
      password: password,
      role: parseInt(role),
      company: parseInt(company),
      employee_code: employeeCode,
      created_at: new Date().toISOString(),
      created_by: 1,
      updated_at: new Date().toISOString(),
      updated_by: 1,

    }
    axios.post("http://localhost:5500/add-user", payload)
      .then((response) => {
        console.log("this is response", response);
        alert("Signup Successful!");
        navigate('/home')
      })
      .catch((error) => {
        alert("Signup Failed!");
        console.log("this is error", error);
      });
  };
  console.log('this is role', role)
  return (
    // <div className="container"

    <div className="signup-container , w-screen h-screen flex justify-center items-center bg-gray-100">
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          padding: "20px",
          height: "750x",
          fontFamily: "Arial, sans-serif",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <h1 className="text-center text-5xl">Inward Gate Pass</h1>
        <h1
          className="text-center text-3xl"
          style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
        >
          Signup
        </h1>

        {/* Full Name */}
        <label htmlFor="fullName" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
          style={{
            width: "100%",
            padding: "8px",
            textAlign: "left",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}

        />

        {/* Email */}
        <label htmlFor="email" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "8px",
            textAlign: "left",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}

        />

        {/* Employee Code */}
        <label
          htmlFor="employeeCode"
          style={{ display: "block", textAlign: "left", marginBottom: "5px" }}
        >
          Employee Code
        </label>
        <input
          type="number"
          id="employeeCode"
          name="employeeCode"
          onChange={(e) => setEmployeeCode(Number(e.target.value))}
          placeholder="Employee Code"
          style={{
            width: "100%",
            padding: "8px",
            textAlign: "left",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}

        />

        {/* Password */}
        <label htmlFor="password" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Password:
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "15px",
              textAlign: "left",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}

          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Confirm Password */}
        <label
          htmlFor="confirmPassword"
          style={{ display: "block", textAlign: "left", marginBottom: "5px" }}
        >
          Confirm Password:
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            style={{
              width: "100%",
              padding: "8px",
              marginBottom: "15px",
              textAlign: "left",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}

          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#555",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {/* Company */}
        <label
          htmlFor="company"
          style={{ display: "block", textAlign: "left", marginBottom: "5px" }}
        >
          Select your Company:
        </label>
        <select
          onChange={(e) => setCompany(e.target.value)}
          id="company"
          name="company"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}

        >
          <option value="1">YPL</option>
          <option value="2">Dairy</option>
          <option value="3">Food Chain</option>
          <option value="4">Transportation</option>
        </select>

        {/* Role */}
        <label htmlFor="role" style={{ display: "block", textAlign: "left", marginBottom: "5px" }}>
          Select your role:
        </label>
        <select
          onChange={(e) => setRole(e.target.value)}
          id="role"
          name="role"
          style={{
            width: "100%",
            padding: "8px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}

        >
          <option value="1">Admin</option>
          <option value="2">User</option>
          <option value="3">Receptionist</option>
          <option value="4">Manager</option>
        </select>

        {/* Login Page Link */}
        <div style={{ marginBottom: "20px" }}>
          <a
            href="/"
            style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}
          >
            Go back to login page
          </a>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          style={{
            width: "100%",
            textAlign: "center",
            padding: "10px",
            backgroundColor: '#007BFF',
            color: 'white',
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </div>




    </div>

  );
};

export default Signup;
