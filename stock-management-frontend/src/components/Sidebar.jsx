import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/products", label: "Products" },
  { to: "/products/search", label: "Search Products" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <div className="text-xl font-bold mb-6">Stock Manager</div>
      <nav className="flex flex-col gap-2">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            className={({ isActive }) =>
              `p-2 rounded ${
                isActive
                  ? "bg-indigo-500 text-white hover:bg-indigo-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
