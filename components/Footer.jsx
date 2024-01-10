import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className=" flex justify-around max-sm:justify-between items-center  border-purple-700/20 gap-y-10 border-t  px-3 sm:px-20 -mb-14 pt-14 text-base tracking-widest text-gray-400">
      <div className="flex flex-col">
        <p>Ajesh S</p>
        <a href="mailto:ajeshs.dev@gmail.com">ajeshs.dev@gmail.com</a>
        <a href="tel:+919895765329">+919895765329</a>
      </div>
      <div>
        <Link href="#" target="_blank" className="flex items-center gap-x-1s">
          Github
          <FaGithub />
        </Link>
        <Link href="#" target="_blank" className="flex items-center gap-x-1s">
          LinkedIn
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
