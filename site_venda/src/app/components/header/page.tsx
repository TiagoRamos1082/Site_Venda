export default function Header() {
    return (
        <header className="bg-gray-900 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-xl font-bold">Ramos & Ramos</a>
                
                <nav>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:text-gray-300">Início</a></li>
                    <li><a href="#" className="hover:text-gray-300">Produtos</a></li>
                    <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
                    <li><a href="#" className="hover:text-gray-300">Contato</a></li>
                </ul>
                </nav>
                
                <div>
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Login</button>
                </div>
            </div>
        </header>
    )
}