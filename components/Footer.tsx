import { FaLocationArrow } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import ContactCards from "./ContactCards";

import MagicButton from "./MagicButton";

const EMAIL = "ajeshs.dev@gmail.com";
// Google Docs export link: the browser downloads it as a PDF directly
const RESUME = "https://docs.google.com/document/d/1ZTLAlbSuty0thzC4Ryp-Tx6Sy5TmqWXdQyEU9OtaBMQ/export?format=pdf";

const Footer = () => {
  return (
    <footer className="w-full pt-20 -mb-60 h-fit" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 !-bottom-72 min-h-96">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/footer-grid.svg"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]" data-rv>
          Let&apos;s build something <span className="gradient-text">meaningful.</span>
        </h2>
        <p className="text-white-200 md:mt-10 my-5 text-center" data-rv>
          Interested in working together or discussing an opportunity?
          I&apos;d be glad to connect.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 w-full md:w-auto" data-rv>
          <div className="inline-block w-full md:w-auto">
            <MagicButton
              href={`mailto:${EMAIL}`}
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses="gradient font-semibold !text-slate-900"
            />
          </div>
          <div className="inline-block w-full md:w-auto">
            <MagicButton
              href={RESUME}
              external
              title="Download CV"
              icon={<LuDownload />}
              position="right"
              otherClasses="font-semibold"
            />
          </div>
        </div>
      </div>

      <ContactCards />

      <div className="relative z-10 mt-16 flex justify-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {new Date().getFullYear()} Ajesh S
        </p>
      </div>
    </footer>
  );
};

export default Footer;
