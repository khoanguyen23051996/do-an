import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { CPU, Home, Keyboard, Monitor, Mouse, Ram, SSD } from "./pages";
import { Brand } from "./pages/Brands/Brand";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Cart } from "./pages/Cart/Cart";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ram" element={<div><Outlet /></div>}>
            <Route path="" element={<Ram />}/>
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />}/>
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>
          <Route path="/cpu" element={<div><Outlet /></div>}>
            <Route path="" element={<CPU />}/>
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />}/>
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>
          <Route path="/cpu" element={<CPU />} />
          <Route path="/ssd" element={<SSD />} />
          <Route path="/monitor" element={<Monitor />} />
          <Route path="/mouse" element={<Mouse />} />
          <Route path="/keyboard" element={<Keyboard />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
