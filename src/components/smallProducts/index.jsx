import React from 'react';
import { Card } from 'antd';
import phoneCase from "../../assets/phoneCase.png";

const SmallProducts = () => {
  return (
    <div className="flex justify-between items-center flex-wrap">
      <div className="sm:hidden md:hidden lg:hidden block w-full">
        <div className="flex overflow-x-auto">
          <div className="flex-none w-40 p-2">
            <Card>
              <img src={phoneCase} alt="Phone Case" />
              <p className="text-center">Accessories</p>
            </Card>
          </div>
          <div className="flex-none w-40 p-2">
            <Card>
              <img src={phoneCase} alt="Phone Case" />
              <p className="text-center">Accessories</p>
            </Card>
          </div>
          <div className="flex-none w-40 p-2">
            <Card>
              <img src={phoneCase} alt="Phone Case" />
              <p className="text-center">Accessories</p>
            </Card>
          </div>
          <div className="flex-none w-40 p-2">
            <Card>
              <img src={phoneCase} alt="Phone Case" />
              <p className="text-center">Accessories</p>
            </Card>
          </div>
        </div>
      </div>



      <div className="hidden sm:flex md:flex lg:flex w-full">
        <div className="w-1/4 p-4">
          <Card>
            <img src={phoneCase} alt="Phone Case" />
            <p className="text-center">Accessories</p>
          </Card>
        </div>
        <div className="w-1/4 p-4">
          <Card>
            <img src={phoneCase} alt="Phone Case" />
            <p className="text-center">Accessories</p>
          </Card>
        </div>
        <div className="w-1/4 p-4">
          <Card>
            <img src={phoneCase} alt="Phone Case" />
            <p className="text-center">Accessories</p>
          </Card>
        </div>
        <div className="w-1/4 p-4">
          <Card>
            <img src={phoneCase} alt="Phone Case" />
            <p className="text-center">Accessories</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SmallProducts;
