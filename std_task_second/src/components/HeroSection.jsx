import { useSpring, animated  } from "@react-spring/web";
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
      <div className="container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Animated heading */}
        <animated.div style={fadeIn} className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800">
            We Deliver <br /> Parcel on Time with <br /> no Hassle
          </h1>
          <p className="text-gray-600 mt-4">
            Easy Tracking, fast Payment, and safe Delivery across the country.
          </p>
          <a
            href="#"
            className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold"
          >
            Become a Merchant
          </a>
        </animated.div>

        {/* Animated image */}
        <animated.div style={imageAnimation} className="lg:w-1/3 mt-8 lg:mt-0">
          <img
            src={rider}
            alt="Delivery Man"
            className="w-full lg:max-w-md"
          />
        </animated.div>
      </div>

      {/* Animated stats section */}
      <animated.div
        style={statsAnimation}
        className="container mx-auto px-6 mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 text-center"
      >
        <div className="shadow-md rounded-md p-3 bg-slate-100">
          <h3 className="text-2xl font-bold">300k+</h3>
          <p className="text-gray-600">Registered Merchant</p>
        </div>
        <div className="shadow-md rounded-md p-3 bg-slate-100">
          <h3 className="text-2xl font-bold">10k+</h3>
          <p className="text-gray-600">Delivery Man</p>
        </div>
        <div className="shadow-md rounded-md p-3 bg-slate-100">
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-600">Delivery Point</p>
        </div>
      </animated.div>
    </section>
  );
};

export default Hero;
