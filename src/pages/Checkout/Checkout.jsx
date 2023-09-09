import "./Checkout.css";
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { addProd, deleteProd, updateProd } from '../../redux/action';
import { listCart } from '../../redux/selector';
import { useState } from "react";

export const Checkout = () => {
  let listProd = useSelector(listCart)

  return <div>
    {listProd.length ? 
    <div className="container">
      <h1>Thanh toán</h1>

      <div>
        <label for="name">Tên người mua</label>
        <input type="text" id="name" />
      </div>
      <div>
        <label for="phone">Số điện thoại</label>
        <input type="tel" id="phone" />
      </div>
      <div>
        <label for="address">Địa chỉ</label>
        <input type="text" id="address" />
      </div>

      <h4>Danh sách sản phẩm mua</h4>
      <div className="wrapper">
        {listProd && listProd.map((prod, index) => <div key={index} className="item">
          <img src={prod.logo} alt="" />
          <h3>{prod.name}</h3>
          <p>Đơn giá: {prod.price}</p>
          <p>Số lượng: {prod.quanity}</p>
          <p>Thành tiền: {prod.price * prod.quanity}</p>
        </div>)}
      </div>
      <p>Tổng tiền: {listProd.reduce((pre, curr) => {
        return pre + (curr.price * curr.quanity)
      }, 0)}</p>
    </div> 
    : <div className="notification">Không có sản phẩm nào vui lòng thêm sản phẩm vào giỏ hàng<a href="/">Về trang chủ</a></div>
    }   
  </div>;
};
