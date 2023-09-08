import "./Mouse.css";
import { ramBrands } from "../../shared/utils/constant"
import { BrandCard } from "../../components/ui/BrandCard/BrandCard";

export const Mouse = () => {
  

  return <div className="container">
    <div className="wrapper">
      {ramBrands.map((brand, index) => <BrandCard key={index} name={brand.name} logo={brand.logo} url={brand.url} />)}
    </div>
  </div>;
};
