import "./Cart.css";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addProd, deleteProd, updateProd } from './../../redux/action';
import { listCart } from './../../redux/selector';
import { useState } from "react";
import { Link } from "react-router-dom";

export const Cart = () => {
  let listProd = useSelector(listCart)
  const dispatch = useDispatch()

  const updateCartHandle = (prod, quanity) => {
    dispatch(
      updateProd(
        {id: prod.id, quanity: quanity}
      )
    )
  }
  
  const delCartHandle = (id) => {
    dispatch(
      deleteProd(
        {id}
      )
    )
  }
  return <div>
    {listProd.length ?  
    <div className="container">
      <h1>Giỏ Hàng</h1>
      <div className="wrapper">
          {listProd && listProd.map((prod, index) => <div key={index} className="item">    
          <img src={prod.logo} alt="" />
          <p>{prod.name}</p>
          <input type="number" defaultValue={prod.quanity} onChange={(event) => {updateCartHandle(prod, +event.target.value)}} />
          <p><button className="remove-item" onClick={() => {delCartHandle(prod.id)}}>Xóa</button></p>
        </div>)}
      </div>

      <Link className="check-out"to="/checkout">Tới trang thanh toán</Link>
    </div>

    : <div className="notification">Giỏ hàng trống</div>
    }   
  </div>;
};
