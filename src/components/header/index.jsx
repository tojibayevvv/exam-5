import React from "react";
import { Badge } from "antd";
import { ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import menu from "../../assets/hamburger.svg";
import Logo from "../../assets/TechHeim.svg";
import menu2 from "../../assets/menumd.svg";
import { useCartContext } from "../CartContext";

const Header = () => {
  const { cartCount } = useCartContext();

  return (
    <div className="xs:flex xs:justify-between xs:py-2 md:items-center">
      <img className="xs:w-7 md:hidden" src={menu} alt="Menu" />
      <img className="xs:hidden md:inline" src={menu2} alt="Menu" />
      <img className="xs:w-[140px] md:hidden" src={Logo} alt="Logo" />
      <ul className="xs:hidden md:flex md:justify-between md:gap-5">
        <li>Home</li>
        <li>
          <Link to={"/products"}>Products</Link>
        </li>
        <li>Blog</li>
        <li>FAQ</li>
        <li>Contact Us</li>
      </ul>
      <div className="xs:text-[20px] xs:flex items-center xs:gap-3">
        <Link to={"/bought"}>
          <Badge count={cartCount}>
            <ShoppingOutlined className="text-[25px]" />
          </Badge>
        </Link>
        <UserOutlined />
      </div>
    </div>
  );
};

export default Header;
