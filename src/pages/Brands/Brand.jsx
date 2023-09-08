import { ProductCard } from "../../components/ui/ProductCard/ProductCard";
import { ramBrands } from "../../shared/utils/constant";
import "./Brand.css";
import { useParams } from "react-router-dom";

export const Brand = () => {
  let params = useParams();
  let brand = ramBrands.find(item => item.url === params.brand)
  
  return <div>
    {brand ? 
    <div className="container">
      <p>{brand.name}</p>  
      <img src={brand.logo} alt="" />
      <div className="wrapper">
        {brand.products && brand.products.map((prod, index) => <ProductCard key={index} name={prod.name} logo={prod.logo} url={prod.url} />)}
      </div>
    </div> 
    : <div className="notification">Không tìm thấy nhãn hàng</div>
    }   
  </div>;

};
