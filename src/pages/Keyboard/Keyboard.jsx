import "./Keyboard.css";
import { keyboardBrands } from "../../shared/utils/constant"
import { BrandCard } from "../../components/ui/BrandCard/BrandCard";

export const Keyboard = () => {
  

  return <div className="container">
    <div className="wrapper">
      {keyboardBrands.map((brand, index) => <BrandCard key={index} name={brand.name} logo={brand.logo} url={brand.url} />)}
    </div>
  </div>;
};
