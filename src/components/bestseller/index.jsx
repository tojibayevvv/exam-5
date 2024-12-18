import React from "react";
import useAxios from "../gettingAPI";
import { StarFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  const { data, loading, error } = useAxios({ url: "newProdRef" });

  if (loading) return <p className="text-center mt-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-4">Error loading data.</p>;

  return (
    <>
      <div className="flex justify-between items-center mt-5 px-4">
        <h2 className="font-medium text-[18px] text-black">Best Sellers</h2>
        <p className="font-medium text-[16px] text-black">
          <Link to={"/newproducts"} className="hover:underline">
            View all &#62;
          </Link>
        </p>
      </div>
      <hr className="w-full xs:border-1 mb-4 mt-2 border-gray-500" />
      <div className="grid gap-4 px-4 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((items) => (
          <div
            key={items.id}
            className="border rounded-lg p-3 shadow-md flex flex-col items-start bg-white hover:shadow-lg transition duration-300"
          >
            <img
              src={items.image}
              className="w-full h-[150px] object-cover rounded-md mb-3"
              alt={items.title}
            />
            <h2 className="font-bold text-lg mb-2">{items.title}</h2>
            <p className="text-sm text-gray-600 mb-3">
              {items.description.length > 15
                ? items.description.slice(0, 15) + "..."
                : items.description}
            </p>
            <div className="flex justify-between w-full items-center mt-auto">
              <p className="text-black text-[15px] font-bold">
                {items.price} <span className="text-[12px]">so'm</span>
              </p>
              <p className="text-blue-900 flex items-center gap-1">
                <StarFilled /> {items.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bestsellers;
