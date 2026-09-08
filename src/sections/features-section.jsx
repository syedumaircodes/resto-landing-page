import { ChefHat, Leaf, Heart } from "lucide-react";
import { featuresData } from "../data/data";
import AnimationProvider from "../components/animation-provider";
const iconMap = {
  ChefHat,
  Leaf,
  Heart,
};
const FeaturesSection = () => {
  return (
    <section id="dishes" className="px-auto mt-44">
      <div className="text-center mb-16">
        <AnimationProvider delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-3.5">
            What sets us apart
          </p>
        </AnimationProvider>
        <AnimationProvider delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            Crafting memorable dinning experiences
          </h2>
        </AnimationProvider>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-14 max-w-7xl mx-auto">
        <div className="space-y-10 max-w-md">
          {featuresData.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
              <AnimationProvider
                key={index}
                y={150}
                delay={index * 0.15}
                className="flex items-start gap-4 text-left"
              >
                {IconComponent && (
                  <IconComponent className="text-orange-500 size-5 shrink-0 mt-0.5" />
                )}
                <div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-zinc-600 max-w-sm">{item.description}</p>
                </div>
              </AnimationProvider>
            );
          })}
        </div>
        <AnimationProvider x={50} y={0}>
          <img
            src="/assets/chef.png"
            alt="chef portrait"
            className="rounded-3xl object-cover h-111 w-full max-w-sm"
          />
        </AnimationProvider>
      </div>
    </section>
  );
};

export default FeaturesSection;
