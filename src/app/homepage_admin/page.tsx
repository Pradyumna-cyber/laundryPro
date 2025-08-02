'use client';

import Link from 'next/link';
import './page.css';

export default function AdminHomePage() {
  return (
    <div className="admin-container">
      <h1>Welcome Admin 🧺</h1>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <Link href="/homepage_admin/qrcode">📷 QR</Link>
        <Link href="/homepage_admin/people">👥 People</Link>
        <Link href="/homepage_admin/settings">⚙️ Settings</Link>
      </nav>
    </div>
  );
}
