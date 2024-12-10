import { useContext } from "react";
import { AdsContext } from "../adsCard";
import { Carousel } from "antd";

const Advertisement = () => {
  const { ads } = useContext(AdsContext);

  return (
    <div className="max-w-[1000px] mx-auto py-8 px-4">
      <Carousel autoplay>
        {ads.map((items) => (
          <div key={items.id} className="text-center">
            <img
              src={items.image}
              alt={items.title}
              className="w-full xs:h-[350px] md:h-[750px] lg:h-[800] object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                {items.title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-gray-600">
                {items.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Advertisement;