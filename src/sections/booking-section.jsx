import { Star } from "lucide-react";
import AnimationProvider from "../components/animation-provider";
import { bookingSteps, bookingTestimonial } from "../data/data";

const BookingSection = () => {
  return (
    <section id="booking-process" className="px-auto mt-44">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25">
        {/* Right side */}
        <div className="flex flex-col text-center md:text-left">
          <AnimationProvider delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-4">
              Table reservation process
            </p>
          </AnimationProvider>
          <AnimationProvider delay={0.2}>
            <h2 className="text-4xl md:text-5xl mb-16">
              Reserve your table in three simple steps
            </h2>
          </AnimationProvider>
          <AnimationProvider className="flex gap-0.5 mb-6 justify-center md:justify-start">
            {[...Array(bookingTestimonial.rating)].map((_, index) => (
              <Star className="size-4 fill-orange-500 text-orange-500" />
            ))}
          </AnimationProvider>
          <AnimationProvider delay={0.2}>
            <p className="text-zinc-600 max-w-sm max-md:mx-auto mb-4">
              "{bookingTestimonial.quote}"
            </p>
          </AnimationProvider>
          <AnimationProvider className="flex items-center justify-center md:justify-start gap-3">
            <img
              className="size-12 rounded-full object-cover"
              src={bookingTestimonial.authorImg}
              alt={bookingTestimonial.authorName}
            />
            <span className="text-lg">{bookingTestimonial.authorName}</span>
          </AnimationProvider>
        </div>
        {/* Left side */}
        <div className="space-y-14 text-left">
          {bookingSteps.map((item, index) => (
            <AnimationProvider
              key={index}
              delay={index * 0.15}
              y={150}
              className="flex items-start gap-9"
            >
              <span className="text-orange-500 font-medium text-lg shrink-0">
                {item.number}
              </span>
              <div className="flex flex-col">
                <h3 className="text-xl mb-5">{item.title}</h3>
                <p className="text-zinc-600">{item.description}</p>
              </div>
            </AnimationProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
