"use client";

import { FaLocationArrow, FaGithub } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="gradient-text drop-shadow-lg ">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 ">
        {projects.map((item, index) => (
          <div
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem]  flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer title={item.link} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10 rounded-xl">
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    {index === 0 ? "Check Live Site" : "Github"}
                  </p>
                  {index === 0 ? (
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  ) : (
                    <FaGithub className="ms-3" color="#CBACF9" />
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
