import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">404 — Not Found</h2>
      <p>The page you requested does not exist.</p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded"
      >
        Go back
      </button>
    </div>
  );
}
