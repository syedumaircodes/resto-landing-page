import { Plus, X } from "lucide-react";
import AnimationProvider from "../components/animation-provider";
import { faqs } from "../data/data";
const FaqsSection = () => {
  return (
    <section id="faq" className="mt-44 px-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <AnimationProvider delay={0.2}>
            <p className="text-orange-500 font-medium uppercase mb-3.5">FAQs</p>
          </AnimationProvider>
          <AnimationProvider delay={0.2}>
            <h2 className="text-4xl md:text-5xl max-w-2xl mx-auto text-balance">
              Frequently Asked Questions
            </h2>
          </AnimationProvider>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimationProvider key={index} y={150} delay={index * 0.15}>
              <details className="border border-slate-200 text-zinc-600 rounded-lg group">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none hover:bg-slate-50/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-zinc-700 pr-4">{faq.question}</span>
                  <span className="size-7 rounded-full bg-black/5 grid place-content-center shrink-0">
                    <Plus size={14} className="group-open:hidden" />
                    <X size={14} className="hidden group-open:block" />
                  </span>
                </summary>
                <p className="px-5 pb-4 leading-relaxed">{faq.answer}</p>
              </details>
            </AnimationProvider>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
