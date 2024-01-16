import Link from 'next/link'
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaCloudDownloadAlt,
} from 'react-icons/fa'

const Header = () => {
  return (
    <header className="py-8 snap-start">
      <div className="container mx-auto">
        <div className="flex  w-full justify-between items-center">
          <div className="cursor-pointer rounded-full text-shadow text-2xl font-bold text-white hover:tracking-widest transition-all">
            Ajesh S
          </div>
          {/* resume */}
          <button className="btn btn-sm projectCount flex gap-x-1 items-center px-6 hover:scale-105 transition-all">
            <p className="text-white font-semibold"> resume</p>{' '}
            <FaCloudDownloadAlt className="scale-105" />
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
