import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Sales from "../pages/Sales";
import NewProductsPage from "../pages/NewProds";
import BoughtMain from "../pages/boughtProdMain";
import ProductsHeader from "../pages/products";

export const root = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/sales",
        element: <Sales/>
    },
    {
        path: "/newproducts",
        element: <NewProductsPage/>
    },
    {
        path: "/bought",
        element: <BoughtMain/>
    },
    {
        path: "/products",
        element: <ProductsHeader/>
    }
])