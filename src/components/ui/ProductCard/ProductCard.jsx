import { Link } from "react-router-dom";
import "./ProductCard.css";

export const ProductCard = ({ logo,url,name  }) => {
  return <div className="product-card">
    <Link to={url}>
      <img src={logo} alt="" />
      <p className="product-samsung">{name}</p>
      </Link>
  </div>;
};
