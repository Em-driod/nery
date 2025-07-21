

const categories = [
  { name: "Laptops", image: "/mandem.jpg" },
  { name: "phones", image: "/boat.jpg" },
  { name: "Home Accessories", image: "/ms.jpg" },
];

const Showcase = () => {
  return (
    <section className="w-full px-6 md:px-16 lg:px-24 py-10">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Shop by Category</h2>

      {/* Category Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

export default Showcase;
