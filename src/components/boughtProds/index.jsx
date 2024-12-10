import React, { useState } from "react";
import { useCartContext } from "../CartContext";
import useAxios from "../gettingAPI";
import deliveryIcon from "../../assets/deliveryicon.svg";
import verify from "../../assets/verify.svg";
import bin from "../../assets/bin.svg";
import cart from "../../assets/cart.svg";

const BoughtProds = () => {
  const { cartItems, removeFromCart } = useCartContext();
  const { loading, error } = useAxios({ url: "cart" });

  // Track the count for each item in the cart
  const [counts, setCounts] = useState(
    cartItems.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  // Update the count for a specific item
  const updateCount = (id, value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(1, (prevCounts[id] || 1) + value),
    }));
  };

  // Calculate the total price based on counts
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price * (counts[item.id] || 1),
    0
  );

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold text-center sm:text-left">
        Your Wishlist
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error loading data.</p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <>
          {/* Responsive Grid for Cart Items */}
          <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item) => {
              const count = counts[item.id] || 1;
              const totalPrice = item.price * count;
              return (
                <div
                  key={item.id}
                  className="border rounded-md shadow-md p-4 flex flex-col"
                >
                  <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <img
                      src={item.image}
                      className="w-full sm:w-[150px] rounded-md mb-4 sm:mb-0 sm:mr-4"
                      alt={item.title}
                    />
                    <div className="flex-1">
                      <h2 className="font-bold text-lg">{item.title}</h2>
                      <p className="text-sm mt-2">{item.description}</p>
                      <div className="flex gap-2 mt-3 items-center">
                        <img src={deliveryIcon} alt="" className="w-4 h-4" />
                        <p className="text-xs text-gray-600">Free delivery</p>
                      </div>
                      <div className="flex gap-2 mt-2 items-center">
                        <img src={verify} alt="" className="w-4 h-4" />
                        <p className="text-xs text-gray-600">Guaranteed</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <p className="font-semibold text-blue-700">
                      {totalPrice} so'm
                    </p>
                    <button
                      className="text-red-500"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src={bin} alt="Remove" className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                        onClick={() => updateCount(item.id, -1)}
                        disabled={count === 1}
                      >
                        -
                      </button>
                      <span className="text-lg font-bold">{count}</span>
                      <button
                        className="bg-gray-200 px-2 py-1 rounded text-sm"
                        onClick={() => updateCount(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Total Price Section */}
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between items-center">
            <div className="text-center sm:text-left">
              <h2 className="text-xl font-semibold">Grand Total:</h2>
              <p className="text-lg font-bold text-blue-700">
                {totalCartPrice} so'm
              </p>
            </div>
            <button className="mt-4 sm:mt-0 bg-[#0C68F4] py-2 px-6 flex items-center gap-2 text-white rounded-md">
              Proceed to Cart
              <img src={cart} alt="Cart" className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default BoughtProds;
