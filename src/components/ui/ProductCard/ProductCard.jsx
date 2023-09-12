import { Link } from "react-router-dom";
import "./ProductCard.css";
import PropTypes from "prop-types";

//render thẻ sản phẩm - Link(url, img, p)->DetailProduct
export const ProductCard = ({ logo, url, name, price }) => {
  return (
    <div className="product-card">
      <Link to={url}>
        <img className="product-cards" src={logo} alt="" />
        <p className="product-name">{name}</p>
        <p className="price">{price}₫</p>
      </Link>
    </div>
  );
};

//khai báo kiểu dữ liệu cho props được truyền vào ProductCard
ProductCard.propTypes = {
  logo: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};
