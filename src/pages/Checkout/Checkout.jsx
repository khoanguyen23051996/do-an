import "./Checkout.css";
import {useSelector} from 'react-redux'
import { listCart } from '../../redux/selector';

export const Checkout = () => {
  let listProd = useSelector(listCart)

  return <div>
    {listProd.length ? 
    <div className="container">
      <h1>Thanh toán</h1>

      <div>
        <label htmlFor="name">Tên người mua:  </label>
        <input className="infomation-"type="text" id="name" />
      </div>
      <div>
        <label htmlFor="phone">Số điện thoại:  </label>
        <input className="infomation-"type="tel" id="phone" />
      </div>
      <div>
        <label htmlFor="address">Địa chỉ:  </label>
        <input className="infomation-"type="text" id="address" />
      </div>

      <h3>Danh sách sản phẩm mua</h3>
      <div className="wrapper">
        {listProd && listProd.map((prod, index) => <div key={index} className="item">
          <img src={prod.logo} alt="" />
          <p>{prod.name}</p>
          <div className="">
            <p>Đơn giá: {prod.price}₫</p>
            <p>Số lượng: {prod.quantity}</p>
            <p>Thành tiền: {prod.price * prod.quantity}</p>
          </div>
        </div>)}
      </div>

      <p className="total-amount">Tổng tiền: {listProd.reduce((pre, curr) => {
          return pre + (curr.price * curr.quantity)
        }, 0)}
      </p>
    </div> 
    : <div className="notification">Không có sản phẩm nào vui lòng thêm sản phẩm vào giỏ hàng<a href="/">Về trang chủ</a></div>
    }   
  </div>;
};

