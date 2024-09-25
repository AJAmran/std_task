import { useTrail, animated } from "@react-spring/web";
import { cardData } from "../utils/data";
import Cards from "./Cards";

export default function Services() {
  const trail = useTrail(cardData.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 20 },
    delay: 200,
  });

  return (
    <section id="services" className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        Why you should choose <br /> Steadfast?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {trail.map((props, index) => (
          <animated.div key={index} style={props}>
            <Cards card={cardData[index]} />
          </animated.div>
        ))}
      </div>
    </section>
  );
}
