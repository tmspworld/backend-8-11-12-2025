import React from "react";

export default function ProductRow({ product, onEdit, onDelete }) {
  return (
    <tr className="border-b">
      <td className="py-2">{product.id}</td>
      <td>{product.name}</td>
      <td>₹{product.price}</td>
      <td>
        <div className="flex gap-2">
          <button onClick={onEdit} className="px-2 py-1 rounded bg-yellow-300">
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-2 py-1 rounded bg-red-400 text-white"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
