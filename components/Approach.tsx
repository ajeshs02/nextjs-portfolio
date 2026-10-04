import React from "react";

const Approach = () => {
  return (
    <section className="w-full py-20" id="approach" aria-labelledby="approach-heading">
      <h2 id="approach-heading" className="heading" data-rv>
        <span className="gradient-text drop-shadow-lg">My Approach</span>
      </h2>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" classes="text-purple" />}
          des="We'll collaborate to map out your website's goals, target audience,
          and key functionalities. We'll discuss things like site structure,
          navigation, and content requirements."
          index={1}
        ></Card>
        <Card
          title="Development & Progress Update"
          icon={<AceternityIcon order="Phase 2" classes="text-white" />}
          des="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          index={2}
        ></Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" classes="text-yellow" />}
          des="This is where the magic happens! Based on the approved design,
          I'll translate everything into functional code, building your website
          from the ground up."
          index={3}
        ></Card>
      </div>
    </section>
  );
};

export default Approach;

// Main Card
const Card = ({
  title,
  icon,
  des,
  index,
}: {
  title: string;
  icon: React.ReactNode;
  des: string;
  index: number;
}) => {
  const hoverBg =
    index === 1
      ? "hover:bg-purple/[0.14]"
      : index === 2
        ? "hover:bg-white/[0.08]"
        : "hover:bg-yellow/[0.14]";

  return (
    <div
      data-rv
      className={`pf-glow border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl transition-[background-color,border-color] duration-700 ease-out
       hover:[background-image:linear-gradient(to_top,rgba(0,0,0,0.55),rgba(0,0,0,0)_50%)] ${hoverBg}`}
    >
      {/* Icons */}
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30 group-hover/canvas-card:scale-110 group-hover/canvas-card:rotate-45 transition duration-500 ease-in-out" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30 group-hover/canvas-card:scale-110 group-hover/canvas-card:rotate-45 transition duration-500 ease-in-out" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30 group-hover/canvas-card:scale-110 group-hover/canvas-card:rotate-45 transition duration-500 ease-in-out" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30 group-hover/canvas-card:scale-110 group-hover/canvas-card:rotate-45 transition duration-500 ease-in-out" />

      {/* Content */}
      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
        group-hover/canvas-card:opacity-0 transition duration-500 ease-in-out
        [@media(hover:none)]:static [@media(hover:none)]:translate-x-0 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:flex [@media(hover:none)]:justify-center"
        >
          {icon}
        </div>
        <h3
          className="dark:text-white text-center text-3xl opacity-0 [@media(hover:none)]:opacity-100 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white
         group-hover/canvas-card:-translate-y-2 group-hover/canvas-card:scale-105 transition duration-500 ease-in-out"
        >
          {title}
        </h3>
        <p
          className="text-sm opacity-0 [@media(hover:none)]:opacity-100 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-500 ease-in-out"
          style={{ color: "#f3f2f2" }}
        >
          {des}
        </p>
      </div>
    </div>
  );
};

// Middle Icon
const AceternityIcon = ({
  order,
  classes = "text-purple",
}: {
  order: string;
  classes?: string;
}) => {
  return (
    <div>
      <span className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          aria-hidden="true"
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#f0a548_0%,#78a9ee_50%,#f0a548_100%)]"
        />
        <span
          className={`first-letter:inline-flex h-full w-full cursor-pointer items-center
        justify-center rounded-full bg-[#1a1918] px-5 py-2 ${classes} backdrop-blur-3xl font-bold text-2xl`}
        >
          {order}
        </span>
      </span>
    </div>
  );
};

// Corner Icon
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
