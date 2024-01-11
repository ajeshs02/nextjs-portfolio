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
      className="mb-6 text-2xl lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
    >
      <span className={`text-white transition-all  mr-2`}>I am a</span>
      <TypeAnimation
        sequence={['Web Developer', 2000, 'Freelancer', 2000]}
        speed={30}
        className="text-purple-800"
        wrapper="span"
        repeat={Infinity}
      />
    </MotionDiv>
  )
}
export default HeroText
