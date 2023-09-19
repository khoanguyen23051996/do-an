import { useEffect, useState } from "react";
import { ProductCard } from "../../components/ui/ProductCard/ProductCard";
import { dataList } from "../../shared/utils/constant";
import "./Brand.css";
import { useParams } from "react-router-dom";
// render trang danh sách sản phẩm theo brand
export const Brand = () => {
  let params = useParams();
  const [brand, setBrand] = useState({})

  useEffect(() => {
    const categoryList = dataList[params.category] ?? []

    setBrand(categoryList.find((item) => item.url === params.brand) ?? {});
  }, [params]);

  return (
    <>
      {brand ? (
        <div className="brand-container">
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
