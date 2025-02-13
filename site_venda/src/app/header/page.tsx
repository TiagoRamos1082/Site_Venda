// app/components/header/page.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex items-center justify-evenly">
                <Link href="/" className="text-xl font-bold cursor-pointer">
                    <img className="w-20" src="/logo.png" alt="LOGO" />
                </Link>

                <nav>
                    <ul className="flex space-x-12 text-xl">
                        <li><Link href="/" className="hover:text-gray-300 font-arimo">Início</Link></li>
                        <li><Link href="/products" className="hover:text-gray-300">Produtos</Link></li>
                        <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
                        <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
                    </ul>
                </nav>

                <div>
                    <Link href="/login">
                        <button className="bg-gray-200 text-black font-sans hover:bg-gray-700 hover:text-white px-4 py-2 rounded">Login</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
