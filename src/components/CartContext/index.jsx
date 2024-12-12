import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context
const CartContext = createContext();

// Backend API URL
const API_URL = "http://localhost:5000/cart";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the backend on initial render 
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get(API_URL);
        setCartItems(response.data); // Assuming the API returns array of cart items
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };

    fetchCartItems();
  }, []);

  // Add an item to the cart and update the backend
  const addToCart = async (product) => {
    try {
      const response = await axios.post(API_URL, product);
      setCartItems((prevItems) => [...prevItems, response.data]);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // implement remove from cart (optional)
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to consume the context
const useCartContext = () => useContext(CartContext);

export { CartContextProvider, useCartContext };
