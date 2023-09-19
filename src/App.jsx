//import libs
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Home, Category } from "./pages";
import { Brand } from "./pages/Brands/Brand";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";

function App() {
  //config layout, routes
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

           {/* Category */}
          <Route  path=":category" element={ <div> <Outlet /> </div> }>
            <Route path="" element={<Category />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
