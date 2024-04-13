import { fadeIn } from '../variants'
import { MotionDiv } from './MotionElm'
import ProjectCounter from './ProjectCounter'

const About = () => {
  return (
    <section className="h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:gap-x-6 lg:flex-row lg:items-center lg:gap-y-0 h-screen px-3">
          {/*text */}
          <MotionDiv
            variants={fadeIn('left', 0.01)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 gradient-short-text font-bold">About Me</h2>
            <h3
              className={`text-gray-100 transition-all text-2xl font-[500] mb-4`}
            >
              A self taught web developer who build awesome websites with{' '}
              <span className="text-purple">React</span>,{' '}
              <span className="text-green">Next.Js</span>,{' '}
              <span className="text-yellow">MERN</span> stack.
            </h3>
            <p className={`text-gray-300 transition-all mb-6 `}>
              My coding journey began after my BCA graduation. I've since
              immersed myself in web development, accruing substantial
              experience through various projects and{' '}
              <span className="text-purple">freelancing</span> endeavors.
              <br />
              <br />
              My primary aspiration is to master modern web development and give
              users the best{' '}
              <span className="text-yellow">user-experience </span> they
              deserve, while adhering to scalabilty, security and other industry
              standard practices.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-12 mb-12">
              <div className="cursor-default">
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
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
export default About
