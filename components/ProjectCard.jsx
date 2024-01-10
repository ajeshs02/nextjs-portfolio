import Image from 'next/image'
import Link from 'next/link'

const ProjectCard = ({ name, src, desc, link }) => {
  return (
    <div className="card-shadow relative overflow-hidden flex  flex-col flex-grow min-w-44 max-sm:max-w-[80%] mx-auto gap-y-10 rounded-3xl border border-purple-950/50 bg-purple-950/30 hover:scale-[1.01] transition-all delay-500">
      {/* image */}
      <div className="  overflow-hidden min-h-full rounded-xl">
        {/* overlay */}
        <div className="h-fit group  relative w-full overflow-hidden rounded-b-3xl">
          <div className=" group-hover:bg-black/90 w-full h-full absolute z-40 transition-all duration-300 " />

          {/* img */}
          <Image
            src={src}
            className="h-full rounded-md object-cover"
            width={384}
            height={440}
            alt={name}
          />
          {/* description */}
          <div className="absolute -bottom-24  group-hover:bottom-5 left-3  group-hover:left-3  leading-[0.8] transition-all duration-700 z-50">
            <span className="text-sm text-white ">{desc}</span>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-col mt-2 w-full h-full p-2">
          <h4 className="text-white font-medium my-2">{name}</h4>
          <Link
            href={link}
            target="_blank"
            className="text-purple-500 tracking-widest text-base  w-fit pr-6"
          >
            visit
          </Link>
          <Link
            href={''}
            target="_blank"
            className="text-purple-500 w-fit tracking-widest text-base"
          >
            source Code
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard
