import PropTypes from "prop-types"; // Import PropTypes
import "./Dropdown.css";
import { NavLink } from "react-router-dom";

export const Dropdown = ({ items }) => {
  return (
    <>
      <ul className="sub-menu">
        {items.map((item, index) => (
          <li className="sub-menu-item" key={index}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

Dropdown.propTypes = {
  items: PropTypes.array,
};
