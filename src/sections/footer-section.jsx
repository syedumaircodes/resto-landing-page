import AnimationProvider from "../components/animation-provider";
import { socialLinks, quickLinks, sitemapLinks } from "../data/data";
import { Mail, Phone } from "lucide-react";
const FooterSection = () => {
  return (
    <footer className="px-auto relative mt-44 overflow-hidden">
      <div className="flex flex-wrap gap-6 justify-between pb-8">
        <div className="flex flex-col items-start text-left">
          <AnimationProvider>
            <img src="/assets/logo.svg" alt="Restro logo" />
          </AnimationProvider>
          <AnimationProvider delay={0.2}>
            <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-81.25">
              Serving freshly prepared dishes with authentic flavors, premium
              ingredients and exceptional hospitality every day.
            </p>
          </AnimationProvider>
          <div className="flex items-center gap-1.5 mt-6">
            {socialLinks.map((item, index) => (
              <AnimationProvider key={index} delay={index * 0.05}>
                <a
                  href={item.href}
                  className="size-7.5 rounded-full border
      border-slate-300 grid place-content-center"
                >
                  {item.icon}
                </a>
              </AnimationProvider>
            ))}
          </div>
        </div>
        {/* Column 2 */}
        <div>
          <p className="font-medium mb-5">Quick Links</p>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map((link, index) => (
              <AnimationProvider key={link.name} delay={index * 0.05}>
                <a
                  href={link.href}
                  className="text-zinc-600
      hover:text-zinc-500"
                >
                  {link.name}
                </a>
              </AnimationProvider>
            ))}
          </div>
        </div>
        {/* Column 3 */}
        <div>
          <p className="font-medium mb-5">Get in Touch</p>
          <div className="space-y-2">
            <AnimationProvider>
              <a
                href="mailto:hello@example.com "
                className="flex
      items-center gap-1 text-zinc-600 hover:text-zinc-500"
              >
                <Mail size={16} className="shrink-0" />
                hello@example.com
              </a>
            </AnimationProvider>
            <AnimationProvider delay={0.2}>
              <a
                href="tel:hello@example.com "
                className="flex items-center
      gap-1 text-zinc-600 hover:text-zinc-500"
              >
                <Phone size={16} className="shrink-0" />
                915-200-3142
              </a>
            </AnimationProvider>
          </div>
        </div>
        {/* Column 4 */}
        <div>
          <p className="font-medium mb-5">Sitemap</p>
          <div className="flex flex-col gap-2.5">
            {sitemapLinks.map((link, index) => (
              <AnimationProvider key={link.name} delay={index * 0.05}>
                <a
                  href={link.href}
                  className="text-zinc-600
        hover:text-zinc-500"
                >
                  {link.name}
                </a>
              </AnimationProvider>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div
        className="border-t text-zinc-500 border-slate-200 py-4.5 flex
justify-between items-center"
      >
        <p>© 2026. All Right Reserved.</p>
        <p>
          Original template by <a href="https://prebuiltui.com/">PrebuiltUI</a>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
