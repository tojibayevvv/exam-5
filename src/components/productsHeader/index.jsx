import React from "react";
import { useCartContext } from "../CartContext";
import useAxios from "../gettingAPI";

const ProductsHeaderss = () => {
  const { addToCart } = useCartContext();
  const { data, loading, error } = useAxios({ url: "products" });

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading data.</p>;

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-bold text-center mb-6">Products</h1>
      <div className="grid gap-6 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-md shadow-md flex flex-col"
          >
            <img
              src={product.image}
              className="w-full h-[150px] object-cover rounded-md mb-4"
              alt={product.title}
            />
            <h2 className="font-bold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <p className="font-semibold text-blue-700 mt-3">{product.price} so'm</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsHeaderss;
