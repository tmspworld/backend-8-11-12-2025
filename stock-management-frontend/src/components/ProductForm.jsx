import React, { useEffect, useState } from "react";

export default function ProductForm({ initial = null, onSubmit, onCancel }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (initial) {
      setName(initial.name || "");
      setPrice(initial.price || "");
    } else {
      setName("");
      setPrice("");
    }
  }, [initial]);

  const handle = (e) => {
    e.preventDefault();
    if (!name || !price) return alert("Name and price required");
    setSaving(true);
    const payload = { name, price: Number(price) };
    Promise.resolve(onSubmit(payload)).finally(() => setSaving(false));
  };

  return (
    <form onSubmit={handle} className="flex flex-col gap-2">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        placeholder="Price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="p-2 border rounded"
      />
      <div className="flex gap-2">
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 rounded bg-indigo-500 text-white"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded border"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
