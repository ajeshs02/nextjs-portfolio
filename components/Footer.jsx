import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-yellow flex justify-between items-center   gap-y-10 border-t  px-3 sm:px-20 py-20 text-base tracking-wider transition-all text-primary">
      <div className="flex flex-col">
        <p className="hover:tracking-widest transition-all">Ajesh S</p>
        <a
          href="mailto:ajeshs.dev@gmail.com"
          className="hover:tracking-widest transition-all"
        >
          ajeshs.dev@gmail.com
        </a>
        <a
          href="tel:+919895765329"
          className="p-0 max-h-fit max-w-fit w-fit h-fit"
        >
          +919895765329
        </a>
      </div>
      <div className="flex flex-col gap-y-3">
        {/* <a
          href="https://drive.google.com/uc?export=download&id=1nLGB3BDC8CH5hcF_EmTUCv8qvt7bTRaR"
          download="Ajesh S Resume"
          className=" flex items-center gap-x-1 "
        >
          <FaCloudDownloadAlt className="scale-105" /> Resume
        </a> */}
        <a
          href="https://github.com/ajeshs02"
          target="_blank"
          className="flex items-center gap-x-1 "
          aria-label="Github profile page"
        >
          <FaGithub />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/ajesh-s-a507792a7/"
          target="_blank"
          className="flex items-center gap-x-1 "
          aria-label="LinkedIn profile page"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </div>
    </footer>
  )
}

export default Footer
