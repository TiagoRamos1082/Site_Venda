// app/components/header/page.tsx
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold cursor-pointer">
                    Ramos & Ramos
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-gray-300">Início</Link></li>
                        <li><Link href="/products" className="hover:text-gray-300">Produtos</Link></li>
                        <li><Link href="/sobre" className="hover:text-gray-300">Sobre</Link></li>
                        <li><Link href="/contato" className="hover:text-gray-300">Contato</Link></li>
                    </ul>
                </nav>

                <div>
                    <Link href="/login">
                        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Login</button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
