import React from "react";

export default function AuthLayout({ children, msg }) {
  return (
    <div className="auth-layout d-flex justify-content-center align-items-center vh-100">
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="text-center mb-4">
          <h2>{msg || "Welcome!"}</h2>
        </div>
        {children}
      </div>
    </div>
  );
}
