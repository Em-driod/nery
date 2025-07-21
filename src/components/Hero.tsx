import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-screen h-screen bg-cover bg-center" style={{ backgroundImage: "url('/girl.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full text-white p-8 md:p-16">
        <h2 className="text-lg md:text-2xl font-light uppercase tracking-widest">
          Quality applications and gadgets
        </h2>
        <p className="text-sm md:text-lg font-light">
          Smart solutions for everyday convenience
        </p>
        <p className="mt-4   text-sm md:text-base font-semibold  hover:bg-white hover:text-black transition">
          <Link to="/product">SHOP NOW</Link>
          
        </p>
      </div>
    </section>
  );
};

export default HeroSection;



