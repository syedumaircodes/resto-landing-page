import AnimationProvider from "../components/animation-provider";
import { statsData } from "../data/data";
const StatsSection = () => {
  return (
    <section id="stats" className="px-auto mt-32">
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-25 max-w-7xl mx-auto">
        {statsData.map((item, index) => (
          <AnimationProvider
            key={index}
            delay={0.2}
            className="flex flex-col items-center text-center"
          >
            <span className="text-6xl">{item.number}</span>
            <h3 className="mt-5.5 text-2xl">{item.title}</h3>
            <p className="mt-3.5 font-light text-zinc-600 max-w-7xl">
              {item.description}
            </p>
          </AnimationProvider>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
