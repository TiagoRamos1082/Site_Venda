"use client";

import Carousel from "./components/Carousel/Page";




export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3
  };

  return (
    <section className="flex flex-col items-center p-11 bg-gray-950 text-white">
      <div className="flex flex-col w-full px-36">
        <div className="h-9/10">
          <div className="flex justify-end items-center text-2xl gap-2 pb-10">
            <img className="w-10" src="/logo.png" alt="" />
            Fides Flow
          </div>
          <div className="flex items-center justify-center">
            <img src="/Apr_Tela_Inicial.png" alt="Tela_inicio" className="z-1" />
          </div>
          <div className="flex items-center justify-between text-2xl font-p_sans ">
            <div className="flex items-center gap-3 justify-between cursor-pointer">
              <h1 className="text-4xl">Produtos</h1>
              <img className="w-10" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQFJREFUSEvtlN0RgjAQhG87kU6gE6lErUQ6kU6kk9XVIwMBkjAjb94Lw+SS727vB3aw4eD37Q/IKhwkIvkwszp7o8yhA9DK9ShAD6CJAScze3qADYC+LNivF0llLxVk4f6si0he374XMxsAVDsBCk5B3gDonY/FADncvRZBxxxoUr8gzSrAU51K1QLoUoAtaTYBDjl7JoPrqe/CSGaD2ZzkVNojqcQnBVB06opF4aIs9VsBWM0yuYtIrkoVSZNs6eyyI6muEii0bok0ySJPq+nRBqn8rHhWshlEUyqdVZPZtKbauAjgkHHK9Tub1l8BFLmkqfeskeIMcuti6/wPyCr3AnnmexnD2B6GAAAAAElFTkSuQmCC"/>
            </div>
            <div className="flex flex-col justify-self-end border-l-4 border-white pl-5 cursor-pointer">  
              <h1>NOVO LANÇAMENTO</h1>
              <h1 className="font-bold">NOVO LANÇAMENTO</h1>
              <h1 className="font-bold line-through">NOVO LANÇAMENTO</h1>
            </div>      
          </div>    
        </div>
        <div className="h-9/10 pt-28 flex flex-col gap-10">
          <h1 className="text-5xl px-16" >LANÇAMENTOS</h1>
          <div className="w-full px-16">
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
