import ProductCard from "../components/ProductCard";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1000, image: "/bat.jpg" },
    { id: 2, name: "Smartphone", price: 500, image: "/elegant-smartphone-composition.jpg" },
    { id: 3, name: "Headphones", price: 150, image: "/airpod 1.jpg" },
    { id: 4, name: "Tablet", price: 300, image: "/tab 1.jpg" },
    { id: 5, name: "Smartwatch", price: 200, image: "/Apple Watch CGI by Kishvi Studio (1).jpg" },
    { id: 6, name: "Camera", price: 700, image: "/camera 1.jpg" },
    { id: 7, name: "Keyboard", price: 50, image: "/images/keyboard.jpg" },
    { id: 8, name: "Mouse", price: 30, image: "/images/mouse.jpg" },
    { id: 9, name: "Monitor", price: 200, image: "/images/monitor.jpg" },
    { id: 10, name: "Printer", price: 150, image: "/images/printer.jpg" },
    { id: 11, name: "Laptop", price: 1000, image: "/images/laptop.jpg" },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold text-center mb-12 leading-tight">
          Discover Our <span className="text-purple-400">Premium Products</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;