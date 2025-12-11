import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";

export default function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchProducts()
      .then((res) => setCount(res.data.count || res.data.length || 0))
      .catch(() => setCount(0));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Total Products</div>
          <div className="text-3xl font-semibold">{count}</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Placeholder</div>
          <div className="text-3xl font-semibold">—</div>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <div className="text-sm text-gray-500">Placeholder</div>
          <div className="text-3xl font-semibold">—</div>
        </div>
      </div>
    </div>
  );
}
