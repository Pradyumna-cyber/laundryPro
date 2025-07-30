"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // React Calendar built-in styles
import "./page.css"; // Your custom styles

export default function Dashboard() {
  const [date, setDate] = useState(new Date());
const handleDateChange = (value: Date | Date[] | null) => {
  if (value instanceof Date) {
    setDate(value);
  }
};

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-card">
        <h2 className="dashboard-heading">Welcome 👋</h2>
        <p className="dashboard-subtext">
          Selected Date:{" "}
          {date.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>

        <Calendar
  onClickDay={handleDateChange}
  value={date}
  calendarType="gregory"
  locale="en-IN"
/>

      </div>
    </div>
  );
}
