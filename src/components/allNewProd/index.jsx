import React from "react";
import { useCartContext } from "../CartContext";
import useAxios from "../gettingAPI";


const AllNewProds = () => {
  const { addToCart } = useCartContext();

  const {data, loading, error } = useAxios({ url: "newProd" });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="mt-4 grid xs:grid-cols-2 gap-4">
      {data.map((product) => (
        <div key={product.id} className="p-4 border rounded-md shadow-md">
          <img
            src={product.image}
            className="w-full h-[150px] object-cover rounded-md mb-2"
            alt={product.title}
          />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-sm">{product.description}</p>
          <p className="font-semibold text-blue-700 mt-2">{product.price} so'm</p>
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded mt-2"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllNewProds;
