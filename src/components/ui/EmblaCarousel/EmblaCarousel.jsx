import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { slideItems } from "../../../shared/utils/constant";
import "./EmblaCarousel.css";

//Emblacarousel - img slider
export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1 },
    [Autoplay({ delay: 4000 })],
  );

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slideItems.map((item, index) => (
          <div className="embla__slide" key={index}>
            <img src={item} alt={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
