import { Link } from "react-router-dom";
import "./BrandCard.css";

export const BrandCard = ({ logo,url,name  }) => {
  return <div className="brand-card">
    <Link to={url}>
      <img src={logo} alt="" />
      <div>
        <p>{name}</p>
      </div>
        
      </Link>
  </div>;
};
