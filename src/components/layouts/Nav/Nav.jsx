import PropTypes from "prop-types"; // Import PropTypes
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Dropdown } from "../../ui/Dropdown/Dropdown";

export const Nav = ({ items }) => {
  return (
    <nav>
      <ul className="nav-area">
        {items.map((item, index) => (
          <li className="nav-item" key={index}>
            <NavLink to={item.path}>{item.label}</NavLink>
            {item.sub && <Dropdown items={item.sub} />}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.array,
};
