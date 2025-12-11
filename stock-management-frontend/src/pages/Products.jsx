import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/products";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetchProducts()
      .then((res) => setProducts(res.data.data || res.data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = (payload) => {
    return createProduct(payload).then(() => load());
  };

  const handleUpdate = (id, payload) => {
    return updateProduct(id, payload).then(() => {
      setEditing(null);
      load();
    });
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this product?")) return;
    deleteProduct(id).then(() => load());
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="bg-white p-4 rounded shadow">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProductList
                products={products}
                onEdit={setEditing}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>

        <div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">
              {editing ? "Edit Product" : "Add Product"}
            </h2>
            <ProductForm
              initial={editing}
              onSubmit={
                editing
                  ? (data) => handleUpdate(editing.id, data)
                  : handleCreate
              }
              onCancel={() => setEditing(null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
