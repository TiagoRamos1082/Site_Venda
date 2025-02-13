import Link from 'next/link';


interface SimpleCardProps {
  title: string;
  price: string;
  image: string;
  altText: string;
  directionLink: string;
}

export default function SimpleCard({ title, price, image, altText, directionLink }: SimpleCardProps) {
  return (
    <div className="flex flex-col bg-white rounded shadow-md p-4 mx-4">
      <div className="w-full flex items-center justify-center bg-gray-200 rounded overflow-hidden mb-4">
        <img
          src={image}
          alt={altText}
          className="w-1/2 h-1/2 object-cover"
        />
      </div>
      <h2 className="text-[#030712] font-bold text-xl mb-2">{title}</h2>
      <p className="text-2xl font-semibold text-gray-800 mb-4">R${price}</p>
      <Link href={directionLink}>
        <button className="w-full py-2 px-4 bg-[#0a183e] text-white rounded-lg hover:bg-[#0e2154] transition duration-200">
          COMPRE AGORA
        </button>
      </Link>
    </div>
  );
}
