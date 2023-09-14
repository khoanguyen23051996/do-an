// import "./CPU.css";
// import { BrandCard } from "../../components/ui/BrandCard/BrandCard";
// import { cpuBrands } from "../../shared/utils/constant";

// export const CPU = () => {

//   return <div className="container">
//     <div className="wrapper">
//       {cpuBrands.map((brand, index) => <BrandCard key={index} name={brand.name} logo={brand.logo} url={brand.url} />)}
//     </div>
//   </div>;
// };


import "./CPU.css";
import { cpuBrands } from "../../shared/utils/constant";
import { BrandCard } from "../../components/ui/BrandCard/BrandCard";

export const CPU = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {cpuBrands.map((brand, index) => (
          <BrandCard
            key={index}
            name={brand.name}
            logo={brand.logo}
            url={brand.url}
          />
        ))}
      </div>
    </div>
  );
};

