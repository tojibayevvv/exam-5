import { Card } from "antd";
import useAxios from "../gettingAPI";
import { Link } from "react-router-dom";

const BlueOnes = () => {
  const { data, loading, error } = useAxios({ url: "OnSale" });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data.</p>;

  return (
    <div className="bg-[#063A88] rounded-md py-3 px-4 ">
      <div className="top-5 flex justify-between items-center xs:px-2 left-4 mt-[20px]">
        <div>
          <h2 className="text-white">Products On Sale</h2>
          <p className="text-white">Shop Now!</p>
        </div>
        <p className="text-white text-right">
          <Link to={"/sales"}>View All &gt;</Link>
        </p>
      </div>
      <div className="overflow-x-auto flex gap-4 mt-[10px] items-center xs:py-4">
        {data.map((all) => (
          <Card
            key={all.id}
            className="min-w-[250px] flex flex-col justify-between text-left"
          >
            <p className="bg-[#FDDBC9] inline py-1 px-2 rounded-md text-[#F45E0C]">-{all.salePercentage}%</p>
            <img
              className="object-cover h-[150px] w-full my-2 rounded-md"
              src={all.image}
              alt={all.title}
            />
            <h2 className="text-lg font-semibold">{all.title}</h2>
            <p className="text-black text-[20px]">{all.price} so'm</p>
            <p className="text-gray-500 line-through">{all.oldPrice} so'm</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlueOnes;
