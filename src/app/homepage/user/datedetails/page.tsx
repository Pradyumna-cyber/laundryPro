"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface LaundryItem {
  id: number;
  date: string;
  time: string;
  clothes: number;
  price?: number;
  status: string;
  title: string;
}

function DateDetailsPagecontent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [entry, setEntry] = useState<LaundryItem | null>(null);

  useEffect(() => {
    document.title = "Laundry Details";

    try {
      const stored = localStorage.getItem("laundry_entries");
      const groupedEntries = stored ? JSON.parse(stored) : {};

      if (groupedEntries && typeof groupedEntries === "object") {
        const allEntries: LaundryItem[] = (Object.values(groupedEntries) as LaundryItem[][]).flat();
        const matched = allEntries.find((item) => item.id.toString() === id);

        if (matched) {
          const updatedEntry = {
            ...matched,
            price: matched.clothes * 8,
          };

          const updatedGrouped = { ...groupedEntries };
          for (const date in updatedGrouped) {
            updatedGrouped[date] = updatedGrouped[date].map((item: LaundryItem) =>
              item.id === matched.id ? updatedEntry : item
            );
          }

          localStorage.setItem("laundry_entries", JSON.stringify(updatedGrouped));
          setEntry(updatedEntry);
        }
      }
    } catch (error) {
      console.error("Error parsing laundry data:", error);
    }
  }, [id]);

  // ✅ Handler to update clothes count
  const handleClothesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = parseInt(e.target.value) || 0;

    if (!entry) return;

    const updatedEntry = {
      ...entry,
      clothes: newCount,
      price: newCount * 8,
    };

    setEntry(updatedEntry);

    // Update localStorage
    try {
      const stored = localStorage.getItem("laundry_entries");
      const groupedEntries = stored ? JSON.parse(stored) : {};

      if (groupedEntries && typeof groupedEntries === "object") {
        for (const date in groupedEntries) {
          groupedEntries[date] = groupedEntries[date].map((item: LaundryItem) =>
            item.id === entry.id ? updatedEntry : item
          );
        }

        localStorage.setItem("laundry_entries", JSON.stringify(groupedEntries));
      }
    } catch (error) {
      console.error("Error updating localStorage:", error);
    }
  };

  if (!entry) {
    return (
      <div className="details-page">
        <h1 className="details-heading">Laundry Order Details</h1>
        <p>No data found.</p>
      </div>
    );
  }

  return (
    <div className="details-page">
      <h1 className="details-heading">Laundry Order Details</h1>

      <div className="details-card">
        <h2>{entry.title}</h2>
        <p><strong>Date:</strong> {entry.date}</p>
        <p><strong>Time:</strong> {entry.time}</p>

        {/* 👕 Editable clothes count */}
        <p>
          <strong>Clothes:</strong>{" "}
          <input
            type="number"
            value={entry.clothes}
            onChange={handleClothesChange}
            min={0}
            style={{
              width: "60px",
              padding: "4px",
              marginLeft: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />{" "}
          items
        </p>

        <p><strong>Price:</strong> ₹{(entry.price ?? 0).toFixed(2)}</p>

        <p>
          <strong>Status:</strong>{" "}
          <span className={entry.status?.toLowerCase() || "unknown"}>
            {entry.status || "Unknown"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default function DateDetailsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DateDetailsPagecontent />
    </Suspense>
  )
}