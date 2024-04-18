import { FaShoppingCart } from "react-icons/fa";

function App() {
  const products = [
    { id: 1, name: "Laptop", description: "High performance laptop", price: "$999" },
    { id: 2, name: "Smartphone", description: "Latest model smartphone", price: "$499" },
    { id: 3, name: "Headphones", description: "Noise cancelling headphones", price: "$299" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-6">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="card bg-accent shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">
                  Add to Cart <FaShoppingCart className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
