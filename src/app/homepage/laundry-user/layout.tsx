import React from "react";
import AdminMenu from "../../components/LaundryUserMenu";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="homepage-layout">
      <h1>Welcome Admin 🧺</h1>
      <main>{children}</main>
      <footer>
        <AdminMenu />
      </footer>
    </div>
  );
}
