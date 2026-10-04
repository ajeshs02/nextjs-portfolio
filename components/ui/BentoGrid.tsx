"use client";

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {
  const leftLists = ["ReactJS", "NextjS", "Typescript"];
  const rightLists = ["Express", "NodeJS", "MongoDB"];

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("ajeshs.dev@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // clipboard blocked: nothing to do, the address is also in the footer
    }
  };

  return (
    <div
      data-rv
      className={cn(
        "pf-glow row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento justify-between flex flex-col space-y-4 bg-black-200/60",
        className
      )}
    >
      {/* add img divs */}
      <div
        className={`${id === 6 && "text-white flex justify-center"} h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt=""
              aria-hidden="true"
              width={id === 1 ? 900 : 200}
              height={id === 1 ? 700 : 200}
              sizes={
                id === 1
                  ? "(min-width: 1024px) 60vw, 100vw"
                  : id === 5
                    ? "(min-width: 768px) 384px, 240px"
                    : "200px"
              }
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
          {id === 1 && <div className="absolute inset-0 bg-black-100/40 z-0" />}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt=""
              aria-hidden="true"
              width={220}
              height={220}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition-transform duration-500 ease-out relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white-200 z-10">
            {description}
          </div>

          <h3 className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
            {title}
          </h3>

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 mb-3 ">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-white/[0.06]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-3">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50
                    lg:opacity-100 rounded-lg text-center bg-white/[0.06]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative ">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              />

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#1a1918]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
