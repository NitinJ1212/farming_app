import React from "react";
import { useParams } from "react-router-dom";

const DUMMY_USERS = [
  { id: "1", name: "Asha" },
  { id: "2", name: "Ravi" },
  { id: "3", name: "Maya" },
];

export default function UserDetail() {
  const { id } = useParams();
  const user = DUMMY_USERS.find((u) => u.id === id);
  if (!user) return <div className="p-6">User not found</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{user.name}</h2>
      <p>User ID: {user.id}</p>
    </div>
  );
}
