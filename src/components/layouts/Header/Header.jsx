import { Nav } from "../Nav/Nav";
import { GeminiLogo, SearchIcon } from "../../../assets";
import { NavLink } from "react-router-dom";
import { navItems, socialItems } from "../../../shared/utils/constant";
import "./Header.css";


//Header: logo, nav, search input, social 
export const Header = () => {
  return (
    <header>
      <div className="header-left">
        <div id="logo-area">
          <NavLink to="/">
            <img src={GeminiLogo} alt="logo" />
          </NavLink>
        </div>
      </div>

      <Nav items={navItems} />
      <div className="header-right">
        <div className="search-area">
          <input type="search" placeholder="Tìm kiếm..." />
          <a className="search-button">
            <img src={SearchIcon} alt="search" />
          </a>
        </div>
        <div className="social-area">
          {socialItems.map((item, index) => (
            <a href={item.href} key={index} className={`social-link`}>
              <img src={item.label} alt={item.href} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
