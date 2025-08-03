"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import "../page.css";

export default function AddLaundryPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const date = searchParams.get("date");

  const [clothesCount, setClothesCount] = useState("");

  const handleSubmit = () => {
    const count = parseInt(clothesCount);
    if (!date || isNaN(count) || count <= 0) {
      alert("Please enter a valid number of clothes.");
      return;
    }

    const amount = count * 8;
    const newEntry = {
      id: Date.now(),
      date,
      clothes: count,
      amount,
    };

    // Retrieve previous entries
    const prevData = JSON.parse(localStorage.getItem("laundry_entries") || "{}");

    // Append new entry to the specific date
    const updatedData = {
      ...prevData,
      [date]: [...(prevData[date] || []), newEntry],
    };

    localStorage.setItem("laundry_entries", JSON.stringify(updatedData));

    alert(`Added ${count} clothes for ${date} (₹${amount})`);
    setClothesCount("");

    router.push("/homepage_user"); // Redirect after saving
  };

  return (
    <div className="add-laundry-page">
      <div className="add-laundry-card">
        <h2>Add Laundry for</h2>
        <h3 className="selected-date">{date}</h3>

        <input
          type="number"
          min={1}
          placeholder="Enter number of clothes"
          value={clothesCount}
          onChange={(e) => setClothesCount(e.target.value)}
          className="clothes-input"
        />

        <button className="submit-btn" onClick={handleSubmit}>
          Save Entry
        </button>
      </div>
    </div>
  );
}
