import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  return (
    <section className="py-20 w-full" id="experience" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="heading" data-rv>
        <span className="gradient-text drop-shadow-lg">My Work Experience</span>
      </h2>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            data-rv
            duration={12000 + ((index * 2750) % 9000)}
            borderRadius="1.75rem"
            containerClassName="pf-glow bg-white/[0.03]"
            style={{
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="relative flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {/* Absolute Badge */}
            {card.isCurrent && (
              <span className="absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full gradient-text border border-yellow/60 backdrop-blur-md">
                Current
              </span>
            )}

            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt=""
                aria-hidden="true"
                width={200}
                height={200}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h3 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h3>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
