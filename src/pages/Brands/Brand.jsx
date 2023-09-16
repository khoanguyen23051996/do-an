import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ui/ProductCard/ProductCard";
import { cpuBrands, keyboardBrands, monitorBrands, mouseBrands, ramBrands, ssdBrands } from "../../shared/utils/constant";
import "./Brand.css";
import { useParams } from "react-router-dom";
// render trang danh sách sản phẩm theo brand
export const Brand = () => {
  let params = useParams();
  let brandsArray = [ramBrands, cpuBrands, ssdBrands, monitorBrands, mouseBrands, keyboardBrands]; // Chỉ cần thêm brand vào
  const [brand, setBrand] = useState({});

  useEffect(() => {
    brandsArray.map((brandItem) => {
      brandItem.find((item) => {
        if (item.url === params.brand) {
          setBrand(item);
        }
      });
    });
  }, [params.brand]);

  return (
    <>
      {brand ? (
        <div className="brand-container">
          {/* <p>{brand.name}</p> */}
          <div className="logo-brand">
            <img src={brand.logo} alt="" />
          </div>
          <div className="wrapper">
            {brand.products &&
              brand.products.map((prod, index) => (
                <ProductCard
                  key={index}
                  name={prod.name}
                  logo={prod.logo}
                  url={prod.url}
                  price={prod.price}
                />
              ))}
          </div>
        </div>
      ) : (
        <div className="notification">Không tìm thấy nhãn hàng</div>
      )}
    </>
  );
};
