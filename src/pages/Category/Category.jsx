import "./Category.css";
import { dataList } from '../../shared/utils/constant';
import { BrandCard } from "../../components/ui/BrandCard/BrandCard";
import { useParams } from "react-router-dom";

export const Category = () => {
  let params = useParams();
  console.log(params);


  let list = dataList[params.category];

  return (
    <div className="container">
      <div className="wrapper">
        {list ? list.map((brand, index) => (
          <BrandCard
            key={index}
            name={brand.name}
            logo={brand.logo}
            url={brand.url}
          />
        )) : "Trang không tồn tại"}
      </div>
    </div>
  );
};
