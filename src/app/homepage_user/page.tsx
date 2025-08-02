"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./page.css";
import { useRouter } from "next/navigation";


interface LaundryItem {
  title: string;
  date: string;
  time: string;
  clothes: number;
  price: number;
  status: "Paid" | "Unpaid";
}

export default function Dashboard() {
  const router = useRouter(); 
  const [date, setDate] = useState(new Date());

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      setDate(value);
    }
  };

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const laundryData: LaundryItem[] = [
    {
      title: "Delivered Laundry",
      date: "Nov 21, 2023",
      time: "Yesterday, 6:00 PM",
      clothes: 5,
      price: 15.0,
      status: "Paid",
    },
    {
      title: "Pickup Scheduled",
      date: "Nov 20, 2023",
      time: "Nov 20, 9:00 AM",
      clothes: 3,
      price: 9.0,
      status: "Unpaid",
    },
    {
      title: "Order Completed",
      date: "Nov 18, 2023",
      time: "Nov 18, 2:00 PM",
      clothes: 7,
      price: 21.0,
      status: "Paid",
    },
  ];

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Dashboard</h1>

        <div className="calendar-section">
          <h3 className="calendar-title">
            {date.toLocaleString("default", { month: "long" })} {date.getFullYear()}
          </h3>
          <Calendar
            onClickDay={handleDateChange}
            value={date}
            calendarType="gregory"
            locale="en-IN"
          />
        </div>

        <h2 className="activity-heading">User Past Laundry Activity</h2>
{laundryData.map((item, index) => (
  <div
    className="activity-card"
    key={index}
    onClick={() => router.push("/homepage/datedetails")}
    style={{ cursor: "pointer" }}
  >
    <h3>{item.title}</h3>
    <p className="activity-time">{item.time}</p>
    <p>Date: {item.date}</p>
    <p>Clothes: {item.clothes} items</p>
    <p>Price: ${item.price.toFixed(2)}</p>
    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
  </div>
))}


      </div>

      {/* Bottom Nav */}
      <div className="bottom-nav">
        {["Home", "Users", "QR", "Settings"].map((tab) => (
          <div key={tab} className="nav-item">
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
}
