import Link from "next/link";
import React from "react";

function AdminMenu() {
  return (
    <div>
      <nav className="bottom-nav">
        <Link href="/homepage_admin/qrcode">📷 QR</Link>
        <Link href="/homepage_admin/people">👥 People</Link>
        <Link href="/homepage_admin/history">👥 History</Link>
        <Link href="/homepage_admin/settings">⚙️ Settings</Link>
      </nav>
    </div>
  );
}

export default AdminMenu;
