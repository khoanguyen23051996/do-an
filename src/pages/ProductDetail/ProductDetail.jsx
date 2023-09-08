import { ramBrands } from "../../shared/utils/constant";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  let params = useParams();
  let brand = ramBrands.find(item => item.url === params.brand)
  let product = brand?.products ? brand.products.find(item => item.url === params.product) : undefined


  console.log(product);

  return <div>
    {product ? 
    <div className="container">
      <p>{product.name}</p>
      <img src={product.logo} alt="" />
      <p>{product.description}</p>
    </div> 
    :<div className="notification">Không tìm thấy nhãn hàng</div>
    }   
  </div>;
};