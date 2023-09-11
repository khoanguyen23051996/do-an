import { Header } from "../Header/Header";
import "./Layout.css";

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  return (
    <>
    {/* layout: header & main content */}
      <Header />
      <main>{children}</main>
    </>
  );
};
