

const categories = [
  { name: "Tops", image: "/path-to-image1.jpg" },
  { name: "Bottoms", image: "/path-to-image2.jpg" },
  { name: "Accessories", image: "/path-to-image3.jpg" },
  { name: "Footwear", image: "/path-to-image4.jpg" }
];

const StreetwearFuture = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Latest arrivals</h2>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative w-full h-80 bg-cover bg-center rounded-md overflow-hidden"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Category Name */}
            <div className="absolute inset-0 flex justify-center items-center">
              <span className="bg-white text-black text-sm font-medium px-4 py-1 rounded-md shadow-md">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StreetwearFuture;


