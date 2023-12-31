import "./ProductDetail.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { listCart } from "../../redux/selector";
import { dataList } from './../../shared/utils/constant';
import { addProd } from './../../redux/action';

export const ProductDetail = () => {
  let params = useParams();

  let brand =  (dataList[params.category] ?? []).find((item) => item.url === params.brand);
  const [quantity, setQuantity] = useState(1);
  let product = brand?.products
    ? brand.products.find((item) => item.url === params.product)
    : undefined;
  const dispatch = useDispatch();
  const listcart = useSelector(listCart);
  const navigation = useNavigate();

  const addToCart = () => {
    dispatch(
      addProd({
        ...product,
        quantity: quantity,
      })
    );

    setTimeout(() => {
      navigation("/cart", { replace: true });
    }, 500);
  };

  return (
    <div>
      {product ? (
        <div className="container">
          <div className="product-logo">
            <p>{product.name}</p>
            <img src={product.logo} alt="" />
          </div>
          <div className="product-info">
            <p>{product.description}</p>
            <input className="input" type="number" value={quantity}onChange={(event) => {setQuantity(+event.target.value);
              }}
            />
            <button className="add-cart" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <div className="notification">Không tìm thấy nhãn hàng</div>
      )}
    </div>
  );
}