import Link from 'next/link';

interface EmphasisCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  altText: string;
  directionLink: string;
}

export default function EmphasisCard({ title, description, price, image, altText, directionLink }: EmphasisCardProps) {
  return (
    <div className="flex flex-row bg-white  rounded text-gray-950 p-4 gap-4 w-lg h-full ">
      <div className="flex flex-col text-justify w-1/2 pr-5 justify-between rounded p-3">
        <h2 className="font-bold text-2xl">{title}</h2>
        <p>{description}</p>
        <div className="flex justify-around items-center w-auto"> 
          <p className='text-3xl font-sans underline underline-offset-5'>R${price}</p>
          <Link href={directionLink}><button className='text-xl font-sans bg-gray-950 text-white w-auto px-3 py-2 rounded-2xl'>COMPRE JÁ!</button></Link>
        </div>
      </div>
      <div className="w-2/4 bg-black rounded overflow-hidden">
        <img
          src={image}
          alt={altText}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
