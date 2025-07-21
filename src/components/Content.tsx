import  { useRef, useEffect } from "react";
import gsap from "gsap";

const Content = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 }); // Infinite Loop

    tl.fromTo(
      heroRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5, ease: "power2.out" }
    )
      .to(heroRef.current, { opacity: 0, duration: 1, delay: 3 })

      // Show Second Content
      .fromTo(
        secondRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: "power2.out" }
      )
      .to(secondRef.current, { opacity: 0, duration: 1, delay: 3 });
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Background / Hero Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1200x800/000000/ffffff?text=Sushi+Background')",
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content Wrapper */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* HERO SECTION */}
        <div
          ref={heroRef}
          className="absolute w-full h-full flex flex-col items-center justify-center opacity-0 transition-all duration-1000"
        >
          <h1 className="text-5xl lg:text-7xl font-serif tracking-wide mb-4 text-center">
            SUSHI <br /> SENSATION
          </h1>
          <img
            src="/4.jpg"
            alt="Sushi"
            className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-md shadow"
          />
        </div>

        {/* SECOND CONTENT */}
        <div
          ref={secondRef}
          className="absolute w-full h-full flex flex-col items-center justify-center bg-white text-black opacity-0 transition-all duration-1000"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Discover More Delights
          </h2>
          <p className="max-w-3xl text-center leading-relaxed">
            At Topilo, we believe in pushing the boundaries of culinary excellence.
            Explore our signature sushi rolls and fusion dishes, each a new adventure.
          </p>

          {/* Grid Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <img
              src="/4.jpg"
              alt="Dish 1"
              className="w-64 h-40 object-cover rounded-md shadow"
            />
            <img
              src="/5.jpg"
              alt="Dish 2"
              className="w-64 h-40 object-cover rounded-md shadow"
            />
            <img
              src="/6.jpg"
              alt="Dish 3"
              className="w-64 h-40 object-cover rounded-md shadow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

