import React from "react";
import Header from "../header/Header";

function CommonLayout({ children }) {
  return (
    <div className="max-w-7xl mx-auto p-6 lg:px-8">
      {/* Header Component */}
      <Header />
      {/* Header Component */}

      {/* Main Content */}
      <main>{children}</main>
      {/* Main Content */}
    </div>
  );
}

export default CommonLayout;
