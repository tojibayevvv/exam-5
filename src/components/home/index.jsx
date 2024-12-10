import Header from "../header";
import Input from "../input";
import Advertisement from "../adsUI";
import SmallProducts from "../smallProducts";
import BlueOnes from "../productsInBlue";
import NewProducts from "../newProducts";
import Reklama from "../reklama";
import Bestsellers from "../bestseller";
import Brands from "../Brands";
import Watchad from "../watchad";
import Blogs from "../blogs";
import Footer from "../footer";

const HomeComponent = () => {
  return (
    <>
      <div className="w-[95%] mx-auto">
        <Header />
        <Input />
        <Advertisement />
        <SmallProducts />
        <BlueOnes />
        <NewProducts />
        <Reklama />
        <Bestsellers />
        <Brands />
        <Watchad />
        <Blogs />
        <Footer />
      </div>
    </>
  );
};

export default HomeComponent;
