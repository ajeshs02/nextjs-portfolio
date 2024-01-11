'use client'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
const ProjectCounter = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return (
    <div ref={ref} className="text-[40px] font-tertiary text-gradient mb-2">
      {inView ? (
        <CountUp
          delay={0.5}
          start={0}
          end={22}
          duration={4}
          enableScrollSpy={false}
          scrollSpyOnce={true}
          redraw={false}
        />
      ) : null}
      +
    </div>
  )
}
export default ProjectCounter
