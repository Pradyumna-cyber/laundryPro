"use client";

import { useEffect } from "react";

export default function DateDetailsPage() {
  useEffect(() => {
    document.title = "Laundry Details";
  }, []);

  return (
    <div className="details-page">
      <h1 className="details-heading">Laundry Order Details</h1>

      
      <div className="details-card">
        <h2>Delivered Laundry</h2>
        <p><strong>Date:</strong> Nov 21, 2023</p>
        <p><strong>Time:</strong> Yesterday, 6:00 PM</p>
        <p><strong>Clothes:</strong> 5 items</p>
        <p><strong>Price:</strong> $15.00</p>
        <p><strong>Status:</strong> <span className="paid">Paid</span></p>
      </div>
    </div>
  );
}
