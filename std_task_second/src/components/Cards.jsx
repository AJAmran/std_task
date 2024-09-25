import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Cards({ card }) {
  const [isHovered, setHovered] = React.useState(false);

  const hoverAnimation = useSpring({
    boxShadow: isHovered
      ? "0px 20px 30px rgba(0, 0, 0, 0.2)"
      : "0px 10px 15px rgba(0, 0, 0, 0.1)",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={hoverAnimation}
      className="card bg-white p-6 shadow-lg rounded-lg text-center cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={card.img} alt={card.title} className="w-20 mx-auto mb-6" />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
      <p className="text-gray-600">{card.text}</p>
    </animated.div>
  );
}
