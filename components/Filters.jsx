'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { MotionBtn } from './MotionElm'
import { fadeIn } from '@/variants'
import { formUrlQuery } from '@/utils/work'

const links = [
  { name: 'NextJs', id: 1, category: 'nextjs' },
  { name: 'ReactJs', id: 2, category: 'react' },
  { name: 'MERN', id: 3, category: 'mern' },
]

const Filters = () => {
  const [active, setActive] = useState('nextjs')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link) => {
    setActive(link)

    let newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'category',
      value: link,
    })

    router.push(newUrl, { scroll: false })
  }

  return (
    <ul className=" text-white-800 body-text no-scrollbar flex w-full justify-start max-sm:justify-center gap-x-4 max-w-full  overflow-auto py-6 sm:max-w-2xl">
      {links.map((link) => (
        <MotionBtn
          variants={fadeIn('left', 0.1)}
          initial="hidden"
          whileInView={'show'}
          viewport={{ once: true, amount: 0.3 }}
          key={link.id}
          onClick={() => handleFilter(link.category)}
          className={`bg-purple-950/20 ${
            active === link.category && 'gradient text-slate-800 '
          }   whitespace-nowrap rounded-xl px-4 py-2 capitalize `}
        >
          {link.name}
        </MotionBtn>
      ))}
    </ul>
  )
}

export default Filters
