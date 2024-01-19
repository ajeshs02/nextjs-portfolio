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
          <a
            href="https://drive.google.com/uc?export=download&id=1nLGB3BDC8CH5hcF_EmTUCv8qvt7bTRaR"
            download="Ajesh S Resume"
            className="btn btn-sm projectCount flex gap-x-1 items-center px-6 hover:scale-[.87] transition-all scale-[0.85]"
          >
            <p className="text-white font-semibold"> resume</p>{' '}
            <FaCloudDownloadAlt className="scale-105" />
          </a>
        </div>
      </div>
    </header>
  )
}
export default Header
