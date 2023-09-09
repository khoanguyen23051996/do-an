import "./Cart.css";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addProd, deleteProd, updateProd } from '../../redux/action';
import { listCart } from '../../redux/selector';
import { useState } from "react";

export const Checkout = () => {
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
      <h1>Gio hang</h1>
      <div className="wrapper">
        {listProd && listProd.map((prod, index) => <div key={index} className="item">
          <img src={prod.logo} alt="" />
          <h3>{prod.name}</h3>
          <input type="number" defaultValue={prod.quanity} onChange={(event) => {updateCartHandle(prod, +event.target.value)}} />
          <p><button onClick={() => {delCartHandle(prod.id)}}>Xóa</button></p>
        </div>)}
      </div>
    </div> 
    : <div className="notification">Gio hang trong</div>
    }   
  </div>;
};