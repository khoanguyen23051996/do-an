import "./Home.css";
import { EmblaCarousel } from "../../components/ui/EmblaCarousel/EmblaCarousel";
import { dataList } from "../../shared/utils/constant";
import { ProductCard } from "../../components/ui/ProductCard/ProductCard";
import React from "react";

export const Home = () => {

  return <div className="home">
      <EmblaCarousel />

      <div className="container">
        <h2>Sản phẩm nổi bật</h2>
        {dataList.ram.map((brand, key) => (
          <React.Fragment key={key}>
            <h3>{brand.name}</h3>
            <div className="wrapper">
              {brand.products &&
              brand.products.map((prod, index) => (
                <ProductCard
                  key={index}
                  name={prod.name}
                  logo={prod.logo}
                  url={`/ram/${brand.url}/${prod.url}`}
                  price={prod.price}
                />
              ))}
          </div>
        </React.Fragment>
      ))}
      </div>
    
    </div>;
};
