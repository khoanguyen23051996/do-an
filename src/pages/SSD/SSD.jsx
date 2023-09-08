import "./SSD.css";
import {ssdBrands} from "../../shared/utils/constant"
import { BrandCard } from "../../components/ui/BrandCard/BrandCard";

export const SSD = () => {
  

  return <div className="container">
    <div className="wrapper">
      {ssdBrands.map((brand, index) => <BrandCard key={index} name={brand.name} logo={brand.logo} url={brand.url} />)}
    </div>
  </div>;
};
