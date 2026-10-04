import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";

// Icon file name -> readable technology name (unknown icons are treated as decorative)
const TECH: Record<string, string> = {
  next: "Next.js",
  tail: "Tailwind CSS",
  ts: "TypeScript",
  dock: "Docker",
  fm: "Framer Motion",
  re: "React",
  "node-js": "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  javascript: "JavaScript",
};
const techName = (src: string) => TECH[src.replace(/^\/|\.svg$/g, "")] ?? "";

const RecentProjects = () => {
  return (
    <section className="pt-24 pb-12" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="heading z-10" data-rv>
        <span className="gradient-text drop-shadow-lg ">
          A Small Selection of Recent Projects
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 -mt-8">
        {projects.map((item, index) => {
          const isLinkGithub = item.link.includes("github");

          return (
            <div
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
              key={item.id}
              data-rv
            >
              <PinContainer title={item.link} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 rounded-xl">
                  <Image
                    src={item.img}
                    alt={`${item.title} preview`}
                    width={400}
                    height={350}
                    sizes="400px"
                    className="z-10 absolute bottom-0 object-cover"
                  />
                </div>

                <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h3>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#bab6b6",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => {
                      return (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            width={40}
                            height={40}
                            alt={techName(icon)}
                            className="p-2"
                          />
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-yellow">
                      {isLinkGithub ? "Github" : "Check Live Site"}
                    </p>
                    {isLinkGithub ? (
                      <FaGithub className="ms-3" color="#f0a548" />
                    ) : (
                      <FaLocationArrow className="ms-3" color="#f0a548" />
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
