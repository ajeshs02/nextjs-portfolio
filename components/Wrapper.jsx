'use client'
import { useEffect, useRef } from 'react'

const Wrapper = ({ children }) => {
  const blobRef = useRef(null)

  useEffect(() => {
    const moveBlob = (event) => {
      const { clientX, clientY } = event

      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 2000, fill: 'forwards' }
      )
    }

    document.body.addEventListener('mousemove', moveBlob)

    return () => {
      document.body.removeEventListener('mousemove', moveBlob)
    }
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div id="blob" ref={blobRef} />
      <div id="blur" />
      {children}
    </div>
  )
}

export default Wrapper
