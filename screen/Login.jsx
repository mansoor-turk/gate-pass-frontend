import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState } from 'react';


const Login = () => {
    // State for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false); // ya bhot important ha is ka binna page show he nhi ho ga 
    // Handle form submission
    const handleSubmit = () => {


        if (email == '' || password == '') {
            alert("Please fill in all fields.");
            return;
        }
        axios
            .post('http://localhost:5500/user-login', {
                email: email,
                password: password,
            })
            .then((response) => {
                console.log("response", response)
                if (response.data.data.length > 0) {
                    alert('Login successful!');
                    navigate('/home')
                } else {
                    alert('Login Failed!');
                }
                // Handle successful login



            })
            .catch((error) => {
                // Handle login error
                console.error(error);
            });

    };

    return (
        <div className="login-container , w-screen h-screen flex justify-center items-center bg-gray-100">

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



                <h1 className='text-center text-5xl'  >Inward Gate Pass</h1>
                <div className="container"
                    style={{


                        width: '500px',
                        height: '500px',
                        margin: '50px auto',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    }} >


                    <h1 className='text-center text-3xl' style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'bold', color: 'black' }}>Login</h1>


                    {/* Email Field */}
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




                    {/* Password Field */}
                    <div style={{ marginBottom: '20px' }}>
                        <label
                            className='text-left'
                            htmlFor="password"
                            style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}
                        >
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                style={{
                                    width: '100%',
                                    padding: '10px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                }}
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '10px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    cursor: 'pointer',
                                    color: '#555',
                                }}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </span>
                        </div>
                    </div>











                    {/* creat account */}
                    <div style={{ marginBottom: '20px' }}>
                        {/* Link to the signup page */}
                        <a href="/Signup" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>
                            Create Account
                        </a>
                    </div>

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}

                        style={{
                            width: '100%',
                            padding: '10px',
                            backgroundColor: '#007BFF',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                        }}
                    >
                        Login
                    </button>

                </div>
            </div>




        </div>

    );
};

export default Login;
