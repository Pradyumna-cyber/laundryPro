"use client";

import { useState } from "react";
import './page.css';

export default function Loginpage() {
  const [phone, setPhone] = useState('');

  const handleSendOtp = () => {
    console.log("Send OTP to:", phone);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="heading">Welcome 👋</h2>
        <p className="subtext">Enter your phone number to get started</p>

        <div className="input-container">
          <span className="prefix">+91</span>
          <input
            type="tel"
            maxLength={10}
            className="phone-input"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button className="send-otp-btn" onClick={handleSendOtp}>
          Send OTP
        </button>

        <p className="footer-text">By continuing, you agree to our Terms & Privacy Policy.</p>
      </div>
    </div>
  );
}
