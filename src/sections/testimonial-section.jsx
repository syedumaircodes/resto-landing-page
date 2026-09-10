import { Star } from "lucide-react";
import AnimationProvider from "../components/animation-provider";
import { testimonials } from "../data/data";
const TestimonialSection = () => {
  return (
    <section id="testimonials" className="mt-44 px-auto">
      <div className="text-center mb-16">
        <AnimationProvider delay={0.2}>
          <p className="text-orange-500 font-medium uppercase mb-3.5">
            Loved by Food lovers
          </p>
        </AnimationProvider>
        <AnimationProvider delay={0.2}>
          <h2 className="text-4xl md:text-5xl max-w-lg mx-auto text-balance">
            What our guests say
          </h2>
        </AnimationProvider>
      </div>
      {/* Card grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {testimonials.map((item, index) => (
          <AnimationProvider
            key={index}
            y={80}
            delay={index * 0.1}
            className="border border-slate-200 hover:bg-slate-50/50 rounded-2xl p-6 flex flex-col justify-between text-left"
          >
            <div>
              <div className="flex gap-0.5 mb-4">
                {[...Array(item.rating)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              <p className="text-zinc-600 leading-relaxed mb-6">
                "{item.review}"
              </p>
            </div>
            <div className="flex items-center gap-3 mt-auto">
              <img
                src={item.avatar}
                alt={item.name}
                className="size-11 rounded-full object-cover shrink-0"
              />
              <div>
                <p className="font-medium leading-tight mb-0.5">{item.name}</p>
                <p className="text-zinc-600">{item.location}</p>
              </div>
            </div>
          </AnimationProvider>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
