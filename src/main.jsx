import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { root } from "./router/index.jsx";
import { AdsContextProvider } from "./components/adsCard/index.jsx";
import { CartContextProvider } from "./components/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdsContextProvider>
      <CartContextProvider>
        <RouterProvider router={root} />
      </CartContextProvider>
    </AdsContextProvider>
  </StrictMode>
);
