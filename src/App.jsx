//import libs
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { CPU, Home, Keyboard, Monitor, Mouse, Ram, SSD } from "./pages";
import { Brand } from "./pages/Brands/Brand";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { Cart } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import Footer from "./components/layouts/Footer/Footer";

function App() {
  //config layout, routes
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

           {/* Ram */}
          <Route  path="/ram" element={ <div> <Outlet /> </div> }>
            <Route path="" element={<Ram />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          {/* CPU */}
          <Route path="/cpu" element={<div><Outlet/></div>}>
          <Route path="" element={<CPU />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          {/* SSD */}
          <Route path="/ssd" element={<div><Outlet/></div>}>
          <Route path="" element={<SSD />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          {/* Màn Hình */}
          <Route path="/monitor" element={<div><Outlet/></div>}>
          <Route path="" element={<Monitor />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          {/* Chuột */}
          <Route path="/mouse" element={<div><Outlet/></div>}>
          <Route path="" element={<Mouse />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          {/* Bàn phím */}
          <Route path="/keyboard" element={<div><Outlet/></div>}>
          <Route path="" element={<Keyboard />} />
            <Route path=":brand" element={<Outlet />}>
              <Route path="" element={<Brand />} />
              <Route path=":product" element={<ProductDetail />}></Route>
            </Route>
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
          {/* <Footer /> */}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
