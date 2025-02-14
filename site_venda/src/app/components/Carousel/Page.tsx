// Componentes/Carroucel/Page.tsx
import React from "react";
import SimpleCard from "../SimpleCard/Page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Componente para cada slide
function Carouselslide({ title, price, image, altText, directionLink }: any) {
  return (
    <SimpleCard
      title={title}
      price={price}
      image={image}
      altText={altText}
      directionLink={directionLink}
    />
  );
}

// Componente do carrossel que recebe os produtos como prop
export default function Carousel({ produtos }: { produtos: any[] }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {produtos.map((produto, index) => (
          <Carouselslide key={index} {...produto} />
        ))}
      </Slider>
    </div>
  );
}
