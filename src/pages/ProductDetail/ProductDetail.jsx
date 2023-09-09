import { ramBrands } from "../../shared/utils/constant";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addProd, deleteProd, updateProd } from './../../redux/action';
import { listCart } from './../../redux/selector';
import { useState } from "react";

export const ProductDetail = () => {
  let params = useParams();
  let brand = ramBrands.find(item => item.url === params.brand)
  const [quanity, setQuanity] = useState(1)
  let product = brand?.products ? brand.products.find(item => item.url === params.product) : undefined
  const dispatch = useDispatch()
  const listCartS = useSelector(listCart)

  const addToCart = () => {
    dispatch(
      addProd(
        {...product, quanity: quanity}
      )
    )
  }


  return <div>
    {product ? 
    <div className="container">
      <p>{product.name}</p>
      <img src={product.logo} alt="" />
      <p>{product.description}</p>
      <input type="number" value={quanity} onChange={(event) => {setQuanity(+event.target.value)}} />
      <button onClick={addToCart}>Add to cart</button>
    </div> 
    :<div className="notification">Không tìm thấy nhãn hàng</div>
    }   
  </div>;
};