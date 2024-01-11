import { fadeIn } from '../variants'
import { MotionDiv } from './MotionElm'
import ProjectCounter from './ProjectCounter'

const About = () => {
  return (
    <section className="section  snap-start" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:gap-x-6 lg:flex-row lg:items-center lg:gap-y-0 h-screen px-3">
          {/*text */}
          <MotionDiv
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent font-bold">About Me</h2>
            <h3
              className={`text-white transition-all text-2xl font-semibold mb-4`}
            >
              I'm a self taught web developer. I build websites with React,
              Next.Js and MERN stack.
            </h3>
            <p className={`text-gray-300 transition-all mb-6 `}>
              My coding journey began after my BCA graduation. I've since
              immersed myself in web development, accruing substantial
              experience through various projects and freelancing endeavors.
              <br />
              <br />
              My primary aspiration is to master modern web development and give
              users the{' '}
              <span className="text-purple-600">
                best user-experience{' '}
              </span>{' '}
              they deserve, while adhering to scalabilty, security and other
              industry standard practices.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-12 mb-12">
              <div>
                {/* counter */}
                <ProjectCounter />
                <div
                  className={`text-white font-primary text-sm tracking-[2px]`}
                >
                  Projects
                  <br />
                  Completed
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center ">
              <div className="btn btn-lg flex items-center">
                <a
                  href="#work"
                  className="hover:scale-[1.01]  active:scale-[0.99] transition-all   "
                >
                  view projects
                </a>
              </div>
            </div> */}
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
export default About
