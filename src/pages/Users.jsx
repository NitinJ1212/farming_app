import React from "react";
import { Link } from "react-router-dom";

const DUMMY_USERS = [
  { id: "1", name: "Asha" },
  { id: "2", name: "Ravi" },
  { id: "3", name: "Maya" },
];

export default function Users() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>
      <ul className="space-y-2">
        {DUMMY_USERS.map((u) => (
          <li key={u.id}>
            <Link to={`/users/${u.id}`} className="text-blue-600 hover:underline">
              {u.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
