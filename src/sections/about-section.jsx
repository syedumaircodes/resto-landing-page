import AnimationProvider from "../components/animation-provider";
const AboutSection = () => {
  return (
    <section id="about" className="px-auto mt-44">
      <div className="flex flex-col md:flex-row gap-14 md:gap-18 max-w-7xl mx-auto">
        <AnimationProvider scale={0.8} y={0}>
          <img
            src="/assets/about.png"
            alt="About image"
            className="max-w-137 w-full h-full object-cover rounded-3xl"
          />
        </AnimationProvider>

        {/* right side */}
        <div>
          <AnimationProvider
            scale={0.8}
            y={0}
            className="flex items-center gap-2"
          >
            <img src="/assets/iconL.png" alt="left icon" />
            <span className="font-medium uppercase">Crafted with passion</span>
            <img src="/assets/iconR.png" alt="right icon" />
          </AnimationProvider>
          <AnimationProvider
            scale={0.8}
            y={0}
            className="flex items-center gap-2"
          >
            <h2 className="mt-5 text-4xl md:text-5xl text-balance">
              experience dinning beyond expectations
            </h2>
          </AnimationProvider>
          <AnimationProvider delay={0.2}>
            <p className="mt-4.5 text-zinc-600 max-w-sm">
              We combine fresh local ingredients, creative recipes and elegant
              presentation to deliver a memorable experience with every visit.
            </p>
          </AnimationProvider>

          <AnimationProvider className="mt-9 bg-orange-500 text-white p-2 pr-8 rounded-lg flex items-center gap-3 w-fit">
            <img
              src="/assets/about.png"
              alt="location"
              className="size-15 rounded-lg object-cover shrink-0"
            />
            <div className="flex flex-col gap-2">
              <p className="font-medium">Bistro Royale, NY</p>
              <a href="#booking-process">View on Map</a>
            </div>
          </AnimationProvider>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
