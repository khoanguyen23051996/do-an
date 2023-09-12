import { ramBrands } from "../../shared/utils/constant";
import { cpuBrands } from "../../shared/utils/constant";
import "./ProductDetail.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addProd, deleteProd, updateProd } from "./../../redux/action";
import { listCart } from "./../../redux/selector";
import { useState } from "react";

export const ProductDetail = () => {
  let params = useParams();
  let brand = ramBrands.find((item) => item.url === params.brand);
  const [quantity, setQuantity] = useState(1);
  let product = brand?.products
    ? brand.products.find((item) => item.url === params.product)
    : undefined;
  const dispatch = useDispatch();
  const listCartS = useSelector(listCart);
  const navigation = useNavigate();

  const addToCart = () => {
    dispatch(addProd({ ...product, quantity: quantity }));

    setTimeout(() => {
      navigation("/cart", { replace: true });
    }, 500);
  };

  return (
    <div>
      {product ? (
        <div className="container">
          <p>{product.name}</p>
          <div className="product-logo">
            <img src={product.logo} alt="" />
          </div>

          <p>{product.description}</p>
          <input
            type="number"
            value={quantity}
            onChange={(event) => {
              setQuantity(+event.target.value);
            }}
          />
          <button onClick={addToCart}>Add to cart</button>
        </div>
      ) : (
        <div className="notification">Không tìm thấy nhãn hàng</div>
      )}
    </div>
  );
};
