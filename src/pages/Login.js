// Login.js

import React, { useState } from "react";
import "./Login.css";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-top">
          <h1>Welcome Back</h1>
          <p>Login to your account</p>
        </div>

        <form className="login-form">

          {/* Email */}

          <div className="input-box">

            <FaEnvelope className="input-icon" />

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          {/* Password */}

          <div className="input-box">

            <FaLock className="input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <div
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {
                showPassword
                  ? <FaEyeSlash />
                  : <FaEye />
              }
            </div>

          </div>

          {/* Forgot */}

          <div className="forgot-text">
            <a href="/">Forgot Password?</a>
          </div>

          {/* Button */}

          <button className="login-btn">
            Login
          </button>

        </form>

        {/* Bottom */}

        <div className="bottom-text">
          Don't have an account?
          <a href="/"> Register</a>
        </div>

      </div>
    </div>
  );
}

export default Login;