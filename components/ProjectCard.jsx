import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

const ProjectCard = ({ title, subtitle, desc, src, link, github }) => {
  return (
    <div className="group card-shadow relative overflow-hidden flex  flex-col flex-grow min-w-44 max-sm:max-w-[80%] mx-auto gap-y-10 rounded-3xl  bg-purple-950/30  transition-all delay-500 h-fit bg-purple/10">
      {/* image */}
      <div className="  overflow-hidden min-h-full rounded-xl">
        {/* overlay */}
        <div className="h-fit   relative w-full overflow-hidden rounded-b-3xl">
          <div className=" group-hover:bg-black/80 w-full h-full absolute z-40 transition-all duration-300 " />

          {/* img */}
          <Image
            src={src}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            alt={title}
          />
          {/* description */}
          <div className="absolute -bottom-24  group-hover:bottom-5 left-3  group-hover:left-3  leading-[0.8] transition-all duration-700 z-50">
            <span className="text-sm text-white">{desc}</span>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col mt-2 w-full h-full p-3">
          <h4 className="text-white font-medium ">{title}</h4>
          <p className="text-gray-400 text-sm">{subtitle}</p>
          <div className="flex justify-between items-center my-2">
            {link && (
              <Link
                href={link}
                target="_blank"
                className="text-purple-500 tracking-widest text-sm  w-fit pr-6 underline hover:text-yellow flex gap-x-1 items-center"
              >
                <TbWorldWww /> visit
              </Link>
            )}
            {github && (
              <Link
                href={github}
                target="_blank"
                className="text-purple-500 tracking-widest text-sm whitespace-nowrap  w-fit pr-6 underline hover:text-green flex items-center gap-x-1"
              >
                <FaGithub /> source code
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
