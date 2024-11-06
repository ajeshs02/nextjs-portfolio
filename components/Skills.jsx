import { fadeIn } from '../variants'
import { Skill_set } from '../constants'
import SkillDataProvider from './SkillDataProvider'
import { MotionDiv } from './MotionElm'

const Skills = () => {
  return (
    <section
      className="section mx-auto h-fit max-h-auto mb-24 py-3  mt-56  "
      id="skills"
    >
      <div className="container mx-auto overflow-y-hidden ">
        <div className="w-full flex  justify-center lg:items-center gap-y-7 h-screen px-3">
          {/* icons */}
          <MotionDiv
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 w-full   flex flex-col  first-line:justify-around flex-wrap mt-4 gap-5 justify-center items-center "
          >
            <h2 className="h2  gradient-text text-4xl ml-2 mb-7 font-bold ">
              SKILLS
            </h2>
            <div className="flex-1  flex flex-row  flex-wrap gap-x-5 gap-y-3 !items-center justify-center  lg:max-w-[50%] lg:gap-y-5 max-lg:max-h-[70%]  ">
              {Skill_set.map((image, index) => (
                <SkillDataProvider
                  key={index}
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  index={index}
                  name={image.skill_name}
                  style={image?.style}
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
