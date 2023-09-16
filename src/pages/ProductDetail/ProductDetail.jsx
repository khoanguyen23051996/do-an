import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ramBrands } from "../../shared/utils/constant";

import "./ProductDetail.css";
import { listCart } from './../../redux/selector';

export const ProductDetail = () => {
  let params = useParams();
  let brand = ramBrands.find((item) => item.url === params.brand);
  const [quantity, setQuantity] = useState(1);
  let product = brand?.products
    ? brand.products.find((item) => item.url === params.product)
    : undefined;
  const dispatch = useDispatch();
  const listCart = useSelector(listCart);
  const navigation = useNavigate();

  const addToCart = () => {
    dispatch(
      addProd(
        {...product, quanity: quanity}
      )
    )

    setTimeout(() => {
      navigation("/cart", { replace: true });
    }, 500);
  };

  return <div>
    {product ? 
    <div className="container">
      <div className="product-logo">
      <p>{product.name}</p>
        <img src={product.logo} alt="" />
      </div>
      <div className="product-info">
        <p>{product.description}</p>
        <form className="detail-product-form">
          <input className= "input"type="number" value={quanity} onChange={(event) => {setQuanity(+event.target.value)}} />
          <button className= "add-cart" onClick={addToCart}>Add to cart</button>
        </form>
      </div>
    </div> 
    :<div className="notification">Không tìm thấy nhãn hàng</div>
    }   
  </div>;
};