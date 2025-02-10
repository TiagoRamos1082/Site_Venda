// app/components/products/page.tsx
export default function Products() {
    const produtos = [
        { id: 1, nome: "Produto A", preco: "R$ 99,90" },
        { id: 2, nome: "Produto B", preco: "R$ 129,90" },
        { id: 3, nome: "Produto C", preco: "R$ 79,90" },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Produtos</h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {produtos.map((produto) => (
                    <li key={produto.id} className="border p-4 rounded shadow bg-white">
                        <h2 className="text-xl font-semibold">{produto.nome}</h2>
                        <p className="text-gray-700">{produto.preco}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
