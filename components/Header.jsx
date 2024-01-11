import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="py-8 snap-start">
      <div className="container mx-auto">
        <div className="flex  w-full justify-between items-center">
          <div className="cursor-pointer rounded-full text-shadow text-2xl font-bold text-white hover:tracking-widest transition-all">
            Ajesh S
          </div>
          {/* socials */}
          <div className={`flex text-[20px] text-white  gap-x-6`}>
            <Link
              href="https://github.com/JS-Wizardd"
              target="_blank"
              className=""
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ajesh-s-a507792a7/"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
