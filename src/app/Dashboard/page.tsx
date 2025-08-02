"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./page.css";

export default function Loginpage() {
  const [phone, setPhone] = useState("");
  const [isLaundryGuy, setIsLaundryGuy] = useState(false);
  const router = useRouter();

  const handleSendOtp = () => {
    console.log("Send OTP to:", phone);
    router.push(`/otp?phone=${phone}&admin=${isLaundryGuy}`);
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="heading">Login to Continue</h2>
        <p className="subtext">Enter your phone number to get started</p>

        <div className="input-container">
          <input
            type="text"
            maxLength={30}
            className="phone-input"
            placeholder="Name"
          />
        </div>

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

        <label className="cb">
          <input
            type="checkbox"
            checked={isLaundryGuy}
            onChange={(e) => setIsLaundryGuy(e.target.checked)}
          />
          Login as Laundry Guy
        </label>

        <button className="send-otp-btn" onClick={handleSendOtp}>
          Send OTP
        </button>

        <p className="footer-text">
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
