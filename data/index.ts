export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/coding.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Engineering with a performance-first and scalability mindset",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently exploring Go and high-concurrency backend architectures",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ride.Rent - Vehicle Rental Platform (released)",
    des: "Comprehensive vehicle rental platform with Next.js, focused on SEO optimization and high performance. ",

    img: "/assets/ride-rent.webp",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "dock.svg", "/fm.svg"],
    link: "https://ride.rent/ae/dubai/cars",
  },
  {
    id: 2,
    title: "Team Sync - Jira inspired project management tool",
    des: "A modern project management tool inspired by Jira, built with React/NodeJs/Express/Mongodb/GCP with Google Auth. Features include task management, team collaboration, and project tracking. ",

    img: "/assets/teamsync.webp",
    iconLists: [
      "/re.svg",
      "/node-js.svg",
      "/express.svg",
      "/mongodb.svg",
      "/dock.svg",
    ],
    link: "https://team-sync-lyart.vercel.app/",
  },
  {
    id: 3,
    title: "Gravity - An E-Commerce platform.",
    des: "Built on MERN stack, this is a modern e-commerce platform, with payment integration and file uploads ",
    img: "/assets/gravity.webp",
    iconLists: [
      "javascript.svg",
      "/re.svg",
      "/tail.svg",
      "/node-js.svg",
      "/mongodb.svg",
    ],
    link: "https://github.com/ajeshs02/Gravity",
  },
  {
    id: 4,
    title: "Evently - An Event Management platform",
    des: "A modern event management platform with stripe payment integration and clerk authentication",
    img: "/assets/evently.webp",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/mongodb.svg"],
    link: "https://github.com/ajeshs02/event_platform",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer – TechPearl",
    desc: "Developing scalable, production-grade applications with a focus on system reliability, clean architecture, and performance optimization. Collaborating across teams to design maintainable APIs, improve deployment workflows, and deliver robust end-to-end solutions.",
    isCurrent: true,
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer / Lead Frontend Developer",
    desc: "Led frontend architecture and contributed across the MERN stack for Ride Rent, a high-performance and SEO-critical platform built with Next.js. Designed scalable components, optimized Core Web Vitals, implemented SSR/ISR strategies, and ensured seamless API integration for improved performance and discoverability.",
    isCurrent: false,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Collaborative Development",
    desc: "Partnered with cross-functional teams including backend engineers, designers, and product stakeholders to translate business requirements into performant UI solutions. Improved frontend architecture for modularity, reusability, and cross-device compatibility while maintaining high code quality standards.",
    isCurrent: false,
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mentor, Web Development Projects",
    desc: "Mentored college students on end-to-end web development projects, guiding them through requirement analysis, architecture design, code reviews, and deployment best practices. Emphasized clean coding principles, scalability considerations, and industry-standard workflows.",
    isCurrent: false,
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/ajeshs02",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/ajesh02/",
    img: "/link.svg",
  },
];
