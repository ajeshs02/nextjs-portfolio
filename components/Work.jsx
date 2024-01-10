import { fadeIn } from '../variants'
import { useInView } from 'react-intersection-observer'
import { MotionDiv } from './MotionElm'
import Filters from './Filters'
import { getProjects } from '@/sanity/actions'
import ProjectCard from './ProjectCard'

const Work = async ({ searchParams }) => {
  const projects = await getProjects({
    category: searchParams?.category || '',
    page: '1',
  })

  // console.log('projects: ', projects)

  return (
    <section
      className="section h-screen min-h-screen  mb-24 py-3 max-sm:mt-28 "
      id="work"
    >
      <div className="container mx-auto w-full">
        <div className="flex flex-col w-full gap-x-10">
          <MotionDiv
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4  lg:mb-0"
          >
            {/* text */}
            <h2 className="h2 leading-tight  lg:mt-44 font-bold text-accent">
              My Works
            </h2>
          </MotionDiv>

          <div className="w-full justify-center">
            <Filters />
          </div>
          {/* project grid */}
          {projects?.length > 0 ? (
            <MotionDiv
              variants={fadeIn('right', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  name={project.name}
                  desc={project.description}
                  src={project.image}
                  link={project.link}
                />
              ))}
            </MotionDiv>
          ) : (
            <p className="body-regular text-white-400 text-white">
              Oops,No Projects found !
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
export default Work
