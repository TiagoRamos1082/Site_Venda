import EmphasisCard from "./components/EmphasisCard/Page";


export default function Home() {
  return (
    <section className="flex flex-col h-screen items-center p-24 bg-gray-950 text-white">
      <div className="flex flex-col w-full gap-3">
        <h1 className="text-5xl p-5">Destaques</h1>
        <div className="flex flex-row gap-6 h-1/2 justify-around">
          <EmphasisCard 
            title="Trem de Madeira"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates veritatis esse quae, hic culpa perspiciatis nostrum iste officiis recusandae facilis ullam, minus repellendus cupiditate exercitationem impedit dolor. Voluptas, atque asperiores."
            price="39,99"
            image="/TremImagem.jpg"
            altText="Trem de Madeira"
            directionLink="#"
          />
          <EmphasisCard 
            title="Carro de Brinquedo"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nemo. Quo voluptatem ad, exercitationem minus doloremque tempora corporis atque. Sint, at. Adipisci, placeat? Exercitationem dolorum quo perferendis eos dolore soluta."
            price="39,99"
            image="/TremImagem.jpg"
            altText="Carro de Brinquedo"
            directionLink="#"
          />
          <EmphasisCard 
            title="Xilofone"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, nemo. Quo voluptatem ad, exercitationem minus doloremque tempora corporis atque. Sint, at. Adipisci, placeat? Exercitationem dolorum quo perferendis eos dolore soluta."
            price="39,99"
            image="/Xylophone.jpg"
            altText="Xilofone de Brinquedo"
            directionLink="#"
          />
        </div>
      </div>
    </section>
  );
}
