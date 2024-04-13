import { fadeIn } from '../variants'
import { MotionDiv } from './MotionElm'
import Filters from './Filters'
import ProjectCard from './ProjectCard'
import { projects } from '@/constants'

const Work = async ({ searchParams }) => {
  let category = searchParams?.category || 'nextjs'

  const filteredProjects = projects.filter(
    (project) => project.category === category
  )

  return (
    <section
      className="min-h-[50vh]  !h-auto sm:h-[70vh] max-h-auto py-3 "
      id="work"
    >
      <div className="container mx-auto w-full">
        <div className="flex flex-col  w-full gap-x-10">
          <MotionDiv
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4  lg:mb-0"
          >
            {/* text */}
            <h2 className="h2 gradient-short-text font-bold">My Works</h2>
          </MotionDiv>

          <div className="w-full justify-center">
            <Filters />
          </div>
          {/* project grid */}
          {filteredProjects.length > 0 ? (
            <MotionDiv
              variants={fadeIn('right', 0.05)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 gap-y-7"
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  subtitle={project.subtitle}
                  desc={project.description}
                  src={project.image}
                  link={project.link}
                  github={project.github}
                />
              ))}
            </MotionDiv>
          ) : (
            <div className="h-72 flex justify-center items-center">
              <p className="body-regular text-white-400 text-xl text-white">
                Oops, No {category} Projects found !
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
export default Work
