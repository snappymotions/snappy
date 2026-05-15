import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const footer = document.querySelector(".footer");

    if (!footer) return;

    gsap.set(footer, {
      yPercent: 100,
      backgroundColor: "#000000",
    });

    ScrollTrigger.create({
      trigger: footer,
      start: "top bottom",
      onEnter: (self) => {
        const velocity = self.getVelocity();
        const variation = Math.min(Math.abs(velocity / 10000), 0.6);

        gsap.fromTo(
          footer,
          {
            yPercent: 100,
            backgroundColor: "#000000", // orange while bouncing
          },
          {
            yPercent: 0,
            duration: 2,
            ease: `elastic.out(${1 + variation}, ${1 - variation})`,
            backgroundColor: "#000000", // back to black
            overwrite: true,
          }
        );
      },
    });
  }, []);

  return (
    <>
      <footer className="footer text-white sm:px-6 md:px-12 pt-16 md:pt-20 pb-0 overflow-hidden">
        <div className="w-full mx-auto">
          {/* Upper Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 md:mb-20">
            {/* Contact Info */}
            <div className="space-y-6">
              <p className="uppercase tracking-widest opacity-80 leading-relaxed text-[clamp(0.7rem,1.5vw,0.9rem)]">
                503, DIVYAJYOTI ARCADE,
                <br />
                S. NO. 213/1/1, PHURSUNGI,
                <br />
                FURSUNGI POLICE STATION,
                <br />
                HAVELI, PUNE - 412308,
                <br />
                MAHARASHTRA, INDIA
              </p>

              <a
                href="mailto:HELLO@SNAPPYMOTION.COM"
                className="block uppercase tracking-widest text-[clamp(0.65rem,1.4vw,0.8rem)] hover:text-orange-500 transition-colors"
              >
                HELLO@SNAPPYMOTION.COM
              </a>
            </div>

            {/* Navigation */}
            <div className="flex flex-col space-y-2">
              {["HOME", "WORK", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="font-medium text-center md:text-start tracking-tight transition-all duration-300 hover:text-orange-500 hover:translate-x-2
                             text-[clamp(1.1rem,4vw,3rem)]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/20 w-full mb-8" />

          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16">
            <p className="uppercase tracking-[0.2em] opacity-70 text-[clamp(0.6rem,1.2vw,0.75rem)]">
              © ALL RIGHTS RESERVED / {currentYear}
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {["INSTAGRAM", "LINKEDIN", "DRIBBBLE", "FRAMER"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="uppercase tracking-[0.2em] text-[clamp(0.6rem,1.3vw,0.75rem)] hover:text-orange-500 transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Huge Brand Text */}
      <div className="relative bg-black overflow-hidden loader-text pt-5">
        <h2
          className="font-bo text-center leading-none select-none pointer-events-none
                       text-[clamp(3rem,12vw,10rem)]"
        >
          <span className="bg-gradient-to-b from-[#f44e00] to-[#fa7300] bg-clip-text text-transparent">
            SNAPPY MOTION
          </span>
        </h2>
        <div className="relative bottom-6 h-[0.5px] bg-white/10 w-full mb-8" />
      </div>
    </>
  );
};

export default Footer;
