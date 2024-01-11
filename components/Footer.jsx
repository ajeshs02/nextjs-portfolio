import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" flex justify-between items-center  border-purple-700/20 gap-y-10 border-t  px-3 sm:px-20 py-12 text-base tracking-wider transition-all text-gray-500">
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
          className="hover:tracking-widest transition-all"
        >
          +919895765329
        </a>
      </div>
      <div className="flex flex-col gap-y-3">
        <Link
          href="https://github.com/JS-Wizardd"
          target="_blank"
          className="flex items-center gap-x-1 "
        >
          <FaGithub />
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/ajesh-s-a507792a7/"
          target="_blank"
          className="flex items-center gap-x-1 "
        >
          <FaLinkedin />
          LinkedIn
        </Link>
      </div>
    </footer>
  )
}

export default Footer
