import { fadeIn } from '../variants'
import { Skill_set } from '../constants'
import SkillDataProvider from './SkillDataProvider'
import { MotionDiv } from './MotionElm'

const Skills = () => {
  return (
    <section
      className="section mx-auto min-h-fit h-fit max-h-fit mb-24 py-3  mt-8 max-sm:mt-56  "
      id="skills"
    >
      <div className="container mx-auto ">
        <div className="w-full flex  gap-y-10 justify-center lg:items-center lg:gap-y-0 h-screen px-3">
          {/* icons */}
          <MotionDiv
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full   flex flex-col  first-line:justify-around flex-wrap mt-4 gap-5  gap-y-10 justify-around items-center "
          >
            <h2 className="h2  text-accent text-4xl ml-2 -mb-4 font-bold ">
              SKILLS
            </h2>
            <div className="flex-1  flex flex-row  flex-wrap gap-x-5 gap-y-3 items-center justify-center lg:max-w-[60%] lg:gap-y-5 ">
              {Skill_set.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                  name={image.skill_name}
                  style={image.style}
                />
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
export default Skills
