'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const ContactModal = () => {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [buttonText, setButtonText] = useState('Send Email')

  const sendEmail = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setButtonText('Sending...')

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      setButtonText('Email Sent ☑️')
      setTimeout(() => {
        setIsLoading(false)
        setButtonText('Send Email')
      }, 3000)
    } catch (error) {
      console.log(error)
      setButtonText('Failed!')
      setIsLoading(false)
      setTimeout(() => {
        setButtonText('Send Email')
      }, 3000)
    }
  }

  return (
    <div className="py-16 section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h1 className="h2 leading-tight  lg:mt-24 font-bold text-accent">
                Get in touch
              </h1>
              <h2
                className={`text-[45px] lg:text-[90px] leading-none mb-12 text-white`}
              >
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex-1 border border-purple-700 shadow-sm  text-white shadow-purple-300 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start`}
          >
            <input
              type="text"
              value={name}
              required
              name="name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={`!bg-transparent !border-b !border-purple-500 py-3 !outline-none w-full
              !placeholder:text-white !focus:border-accent transition-all`}
            />

            <input
              type="email"
              autoComplete="off"
              value={email}
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={`bg-transparent border-b border-purple-500 py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all`}
            />

            <textarea
              placeholder="Your message"
              value={message}
              autoComplete="off"
              required
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className={`bg-transparent border-b border-purple-500 py-3 outline-none w-full
              placeholder:text-white focus:border-accent transition-all resize-none mb-12`}
            ></textarea>
            <button
              disabled={isLoading || !name || !email || !message}
              className={`btn btn-lg ${isLoading && 'cursor-wait'} `}
            >
              {buttonText}
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
export default ContactModal
