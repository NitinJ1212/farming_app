import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <div className="flex gap-4 mb-4">
        <NavLink to="stats" className={({ isActive }) =>
          "px-3 py-1 rounded " + (isActive ? "bg-indigo-600 text-white" : "bg-gray-100")
        }>Stats</NavLink>
        <NavLink to="settings" className={({ isActive }) =>
          "px-3 py-1 rounded " + (isActive ? "bg-indigo-600 text-white" : "bg-gray-100")
        }>Settings</NavLink>
      </div>
      <div className="border p-4 rounded bg-white shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
