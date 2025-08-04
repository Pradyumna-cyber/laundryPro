import Link from "next/link";
import React from "react";

function LaundryUserMenu() {
  return (
    <div>
      <nav className="bottom-nav">
        <Link href="/homepage/laundry-user/qrcode">📷 QR</Link>
        <Link href="/homepage/laundry-user/people">👥 People</Link>
        <Link href="/homepage/laundry-user/history">👥 History</Link>
        <Link href="/homepage/laundry-user/settings">⚙️ Settings</Link>
      </nav>
    </div>
  );
}

export default LaundryUserMenu;
