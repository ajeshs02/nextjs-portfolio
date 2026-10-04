import { FaLocationArrow } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 px-0 min-h-screen ">
      <div className="max-md:hidden">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />

        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#78a9ee" />
      </div>

      <div className="h-screen w-full min-h-screen  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 !mt-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="pf-rise uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic
          </p>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Engineering products that move businesses forward."
          />

          <p style={{ "--d": "150ms" } as React.CSSProperties} className="pf-rise text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m Ajesh S, a software engineer who enjoys turning complex
            ideas into reliable, scalable products. I focus on building
            thoughtful digital experiences that solve real problems and create
            lasting value.
          </p>

          <div
            className="pf-rise flex w-full flex-col items-center justify-center gap-3 md:w-auto md:flex-row md:gap-4"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            <div className="inline-block w-full md:w-auto">
              <MagicButton
                href="#about"
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="gradient !text-slate-900"
              />
            </div>
            <a
              href="#contact"
              className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/[0.04] px-7 text-sm font-semibold text-white transition-[background-color,border-color,color] duration-300 hover:border-yellow/60 hover:bg-yellow/[0.08] hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow md:mt-10 md:w-60"
            >
              Contact me
              <LuArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
