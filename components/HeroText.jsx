'use client'

import { fadeIn } from '@/variants'
import { MotionDiv } from './MotionElm'
import { TypeAnimation } from 'react-type-animation'

const HeroText = () => {
  return (
    <MotionDiv
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView={'show'}
      viewport={{ once: true, amount: 0.7 }}
      className="mb-6 text-2xl md:text-[45px] xl:text-[56px] font-secondary font-semibold uppercase leading-[1] w-full min-w-full h-max"
    >
      <span className={`text-white transition-all  mr-2`}>I am a</span>
      <TypeAnimation
        sequence={['Web Developer', 2000, 'Freelancer', 2000]}
        speed={30}
        className="gradient-text"
        wrapper="span"
        repeat={Infinity}
      />
    </MotionDiv>
  )
}
export default HeroText
