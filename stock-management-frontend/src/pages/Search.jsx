import { useState } from "react";
import { searchProducts } from "../api/products";

// export default function Search() {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState([]);

//   const handleSearchByName = async () => {
//     if (!query.trim()) return;

//     const data = await searchProducts(query);
//     setResult(data);
//   };

//   const handleSearchById = async () => {
//     if (!query.trim()) return;

//     try {
//       const data = await getProductById(query);
//       setResult([data]); // put in array so table can render
//     } catch (error) {
//       alert("Product not found!");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Search Products</h1>

//       {/* Search Box */}
//       <div className="flex gap-2 mb-4">
//         <input
//           type="text"
//           placeholder="Enter product name or ID"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//         <button
//           onClick={handleSearchByName}
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Search by Name
//         </button>

//         <button
//           onClick={handleSearchById}
//           className="bg-green-600 text-white px-4 py-2 rounded"
//         >
//           Search by ID
//         </button>
//       </div>

//       {/* Results Table */}
//       {result.length > 0 && (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Price</th>
//               <th className="p-2 border">Quantity</th>
//               <th className="p-2 border">ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {result.map((item) => (
//               <tr key={item._id}>
//                 <td className="p-2 border">{item.name}</td>
//                 <td className="p-2 border">₹{item.price}</td>
//                 <td className="p-2 border">{item.quantity}</td>
//                 <td className="p-2 border">{item._id}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

import React from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const handleSearchByName = async () => {
    if (!query.trim()) return;

    const data = await searchProducts(query);
    setResult(data);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Products</h1>
      {/* Search Box */}
      <input
        type="text"
        placeholder="Enter product name or ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button
        onClick={handleSearchByName}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search by Name
      </button>
    </div>
  );
}

export default Search;
