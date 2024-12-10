import React from "react";
import useAxios from "../gettingAPI";

const Brands = () => {
  const { data, loading, error } = useAxios({ url: "brands" });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center">
        <p className="text-[18px] font-semibold">Top Brands</p>
        <p className="text-[18px] font-semibold">View All &gt;</p>
      </div>
      <hr className="w-full xs:border-1 mb-4 mt-2 border-gray-500 " />
      <div className="overflow-x-auto">
        <div className="flex gap-3">
          {data.map((items) => (
            <div key={items.id} className="flex-shrink-0">
              <img className="h-[50px] md:w-[200px] md:h-[120px]" src={items.image} alt={items.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
