import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate(); 

    useEffect(() => {
        const check = () => { 
            if (email === "sujith@gmail.com" && password === "1234") {
                navigate("/home"); 
            }
        };
        check(); 
        return () => {
        };
    }, [email, password, navigate]); 
    const handleSubmit = (e) => {
        e.preventDefault();
       
        if (email !== "sujith" || password !== "1234") {
            setError("Invalid credentials");
        }
    };

    return (
        <>
            <div className="login-container">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-input"
                        />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;
