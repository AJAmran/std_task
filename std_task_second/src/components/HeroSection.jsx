import { useSpring, animated } from "@react-spring/web";
import rider from "../assets/images/rider.svg";

const Hero = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 1, tension: 170, friction: 26 },
    delay: 200,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 120, friction: 14 },
    delay: 400,
  });

  const statsAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { mass: 1, tension: 120, friction: 14 },
    delay: 600,
  });

  return (
    <section id="home" className="bg-white py-20">
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between gap-12">
        {/* Animated heading */}
        <animated.div style={fadeIn} className="lg:w-1/2">
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            We Deliver Parcels on Time <br /> with No Hassle
          </h1>
          <p className="text-lg text-gray-600 mt-6 leading-relaxed">
            Easy Tracking, Fast Payment, and Safe Delivery across the country.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            Become a Merchant
          </a>
        </animated.div>

        {/* Animated image */}
        <animated.div
          style={imageAnimation}
          className="lg:w-1/2 mt-12 lg:mt-0 lg:flex lg:justify-end"
        >
          <img src={rider} alt="Delivery Man" className="w-full lg:max-w-lg" />
        </animated.div>
      </div>

      {/* Animated stats section */}
      <animated.div
        style={statsAnimation}
        className="container mx-auto px-6 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="shadow-lg rounded-lg p-6 bg-green-100 hover:bg-green-600 hover:text-white transition duration-300">
          <h3 className="text-3xl font-bold">300k+</h3>
          <p className="text-gray-600 hover:text-white text-lg mt-2">
            Registered Merchants
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 bg-green-100 hover:bg-green-600 hover:text-white transition duration-300">
          <h3 className="text-3xl font-bold">10k+</h3>
          <p className="text-gray-600 hover:text-white text-lg mt-2">
            Delivery Men
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 bg-green-100 hover:bg-green-600 hover:text-white transition duration-300">
          <h3 className="text-3xl font-bold">500+</h3>
          <p className="text-gray-600 hover:text-white text-lg mt-2">
            Delivery Points
          </p>
        </div>
      </animated.div>
    </section>
  );
};

export default Hero;
