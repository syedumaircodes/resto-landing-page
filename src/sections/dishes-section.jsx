import { useState } from "react";
import AnimationProvider from "../components/animation-provider";
import { dishes } from "../data/data";
import { motion } from "motion/react";
const DishesSection = () => {
  const [rotate, setRotate] = useState({});
  return (
    <section id="dishes" className="px-auto mt-44">
      <div className="text-center mb-16">
        <AnimationProvider delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-3.5">
            Chef's Signature Selection
          </p>
        </AnimationProvider>
        <AnimationProvider>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            Discover our Signature Dishes
          </h2>
        </AnimationProvider>
      </div>

      {/* Dishes grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-18 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <AnimationProvider
            key={index}
            delay={index * 0.1}
            y={80}
            className="flex flex-col items-center text-center shrink-0 cursor-pointer"
            onMouseEnter={() =>
              setRotate((prev) => ({
                ...prev,
                [index]: prev[index] || 0 + 180,
              }))
            }
          >
            <motion.div
              animate={{ rotate: rotate[index] || 0 }}
              transition={{ type: "spring", stiffness: 80, damping: 15 }}
            >
              <img
                src={dish.img}
                alt={dish.title}
                className="size-30 md:size-35 object-cover"
              />
            </motion.div>
            <h3 className="mt-5">{dish.title}</h3>
            <p className="mt-2 text-zinc-600">{dish.price}</p>
          </AnimationProvider>
        ))}
      </div>
    </section>
  );
};

export default DishesSection;
