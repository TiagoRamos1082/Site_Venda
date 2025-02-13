import React from "react";
import SimpleCard from "../SimpleCard/Page";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Lista de produtos
const produtos = [
  {
    title: "Camisa Preta",
    price: "99,90",
    image: "/camisa.png",
    altText: "Imagem de uma camisa preta",
    directionLink: "/produto/camisa-preta"
  },
  {
    title: "Camisa Branca",
    price: "89,90",
    image: "/camisa.png",
    altText: "Imagem de uma camisa branca",
    directionLink: "/produto/camisa-branca"
  },
  {
    title: "Camisa Azul",
    price: "79,90",
    image: "/camisa.png",
    altText: "Imagem de uma camisa azul",
    directionLink: "/produto/camisa-azul"
  },
  {
    title: "Camisa Vermelha",
    price: "109,90",
    image: "/camisa.png",
    altText: "Imagem de uma camisa vermelha",
    directionLink: "/produto/camisa-vermelha"
  },
  {
    title: "Camisa Verde",
    price: "95,90",
    image: "/camisa.png",
    altText: "Imagem de uma camisa verde",
    directionLink: "/produto/camisa-verde"
  }
];

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

// Componente do carrossel
export default function Carousel() {
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
