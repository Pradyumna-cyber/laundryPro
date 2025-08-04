"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./page.css";
import { useRouter } from "next/navigation";

interface LaundryItem {
  id: number;
  date: string;
  clothes: number;
  price: number;
  status: "Paid" | "Unpaid";
  time: string;
  title: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [date, setDate] = useState(new Date());
  const [laundryData, setLaundryData] = useState<LaundryItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("laundry_entries");
    if (stored) {
      const grouped = JSON.parse(stored) as Record<string, LaundryItem[]>;
      const flatData: LaundryItem[] = Object.values(grouped).flat();
      setLaundryData(flatData);
    }
    document.title = "Dashboard";
  }, []);

  const handleDateChange = (value: Date | Date[] | null) => {
    if (value instanceof Date) {
      const isoDate = value.toISOString().split("T")[0];
      router.push(`/homepage/user/addlaundry?date=${isoDate}`);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1 className="dashboard-heading">Welcome 👋</h1>

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

        <h2 className="activity-heading">Your Laundry History</h2>

        {laundryData.length === 0 ? (
          <p className="no-records-text">No laundry entries found. Click a date on the calendar to add.</p>
        ) : (
          laundryData.map((item) => (
            <div
              className="activity-card"
              key={item.id}
              onClick={() => router.push(`/homepage/user/datedetails?id=${item.id}`)}
              style={{ cursor: "pointer" }}
            >
              <h3>{item.title}</h3>
              <p className="activity-time">{item.time}</p>
              <p>Date: {item.date}</p>
              <p>Clothes: {item.clothes} items</p>
              <p>Price: ₹{(item.price || item.clothes * 8).toFixed(2)}</p>
              <span className={`status-badge ${item.status?.toLowerCase() || "unpaid"}`}>
                {item.status || "Unpaid"}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
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
