import React from "react";
import ProductRow from "./ProductRow";

export default function ProductList({ products = [], onEdit, onDelete }) {
  if (!products.length) return <div>No products found</div>;

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr className="text-left border-b">
          <th className="py-2">ID</th>
          <th>Name</th>
          <th>Price</th>
          <th className="w-40">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <ProductRow
            key={p.id}
            product={p}
            onEdit={() => onEdit(p)}
            onDelete={() => onDelete(p.id)}
          />
        ))}
      </tbody>
    </table>
  );
}
