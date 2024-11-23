import { FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn } from "../variants";
import HeroText from "./HeroText";
import { MotionDiv, MotionH1, MotionP } from "./MotionElm";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="h-[85vh] flex items-center snap-start" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* ṭext */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <MotionH1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className={`text-white  text-[55px] mb-1 font-bold leading-[1.2] md:text-[80px] xl:text-[110px]`}
            >
              AJESH S.
            </MotionH1>

            {/* Text Animation */}
            <HeroText />
            {/* <HeroText /> */}

            {/* about */}
            <MotionP
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className={`mx-auto mb-8 max-w-lg font-medium tracking-widest lg:mx-0 text-slate-300`}
            >
              I build solid and scalable websites with great user experience.
              Specializing in Next.Js / MERN Stack.
            </MotionP>
            {/* explore */}
            <MotionDiv
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-8 items-center mb-12 max-w-max text-white max-lg:mx-auto lg:ml-4"
            >
              <a
                href="https://github.com/ajeshs02"
                target="_blank"
                aria-label="Ajesh's GitHub Profile"
                className=""
              >
                <FaGithub className="scale-125 hover:scale-[1.35] transition-all" />
              </a>
              <a
                href="www.linkedin.com/in/ajesh02"
                target="_blank"
                aria-label="Ajesh's LinkedIn Profile"
              >
                <FaLinkedin className="scale-125 hover:scale-[1.35] transition-all" />
              </a>
            </MotionDiv>
            {/* explore */}
            <MotionDiv
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.7 }}
              className="flex gap-x-6 items-center mx-auto mb-12 max-w-max lg:mx-0 text-purple-600/70"
            >
              <a
                href="#about"
                className="flex relative gap-x-2 justify-center items-center px-4 py-2 font-semibold tracking-widest text-gray-700 rounded-3xl transition-all gradient hover:text-black"
              >
                About me <div className="down-arrow" />
              </a>
            </MotionDiv>
          </div>
          {/* image */}
          {/* <MotionDiv
            variants={fadeIn('down', 0.5)}
            initial="hidden"
            whileInView={'show'}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            <img src={Image} alt="profile" />
          </MotionDiv> */}
        </div>
        <div id="about" />
      </div>
    </section>
  );
};
export default Hero;
