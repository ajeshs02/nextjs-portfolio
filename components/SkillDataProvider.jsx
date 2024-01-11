'use client'
import { useInView } from 'react-intersection-observer'
import { MotionDiv } from './MotionElm'
import Image from 'next/image'

const SkillDataProvider = ({ name, src, width, height, index, style }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const animationDelay = 0.1

  return (
    <MotionDiv
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      viewport={{ once: true, amount: 0.3 }}
      animate={inView ? 'visible' : 'hidden'}
      custom={index}
      transition={{ delay: index * animationDelay }}
      className="scale-75 flex flex-col  justify-between items-center gap-y-2 mx-auto object-contain object-center "
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt="name"
        className={`mt-${style} aspect-square`}
      />

      <p className={`text-white transition-all`}>{name}</p>
    </MotionDiv>
  )
}
export default SkillDataProvider
