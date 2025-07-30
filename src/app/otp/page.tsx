"use client";

import { useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./page.css";

export default function OtpPage() {
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone");
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const fullOtp = otp.join("");
    console.log("Entered OTP:", fullOtp);
    // You can add verification logic here
    router.push("/homepage");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="heading">Enter OTP</h2>
        <p className="subtext">We’ve sent an OTP to +91-{phone}</p>

        <div className="otp-input-container">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="otp-box"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => {
                if (el) inputsRef.current[index] = el;
              }}
            />
          ))}
        </div>

        <button className="send-otp-btn" onClick={handleVerify}>
          Verify OTP
        </button>

        <p className="footer-text">Didn’t receive the code? Resend</p>
      </div>
    </div>
  );
}
