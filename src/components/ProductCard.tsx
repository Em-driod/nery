import useCartStore from "../store";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="relative overflow-hidden group bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative w-full h-48 sm:h-56 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        {/* Optional: Overlay for hover effects */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold text-purple-300 truncate w-full px-2">{name}</h3>
        <p className="text-gray-300 text-lg mt-1 font-medium">${price.toFixed(2)}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart({ id, name, price, image, quantity: 1 })}
          className="mt-4 w-full max-w-[180px] bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-white font-semibold py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;