'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import { useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const Contact = () => {
  const form = useRef()
  const nameRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [buttonText, setButtonText] = useState('Send Email')

  const sendEmail = async (e) => {
    e.preventDefault()

    if (!name) {
      nameRef.current.focus()
      return
    } else if (!email) {
      emailRef.current.focus()
      return
    } else if (!message) {
      messageRef.current.focus()
      return
    }

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
        setName('')
        setEmail('')
        setMessage('')
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
    <div className=" section max-md:mt-44 mb-20" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h1 className="h2 leading-tight  lg:mt-24 font-bold text-yellow">
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
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView={'show'}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex-1 border border-green shadow-sm  text-white shadow-purple-300 rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start`}
          >
            <input
              type="text"
              ref={nameRef}
              value={name}
              required
              name="name"
              pattern="^[a-zA-Z\s]{3,}$"
              title="Please enter a valid name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={`bg-transparent border-b border-purple-500 py-3 outline-none w-full
              placeholder:text-white focus:border-green transition-all`}
            />

            <input
              type="email"
              ref={emailRef}
              autoComplete="off"
              value={email}
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className={`bg-transparent border-b border-purple-500 py-3 outline-none w-full
              placeholder:text-white focus:border-green transition-all`}
            />

            <textarea
              placeholder="Your message"
              ref={messageRef}
              value={message}
              required
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              className={`bg-transparent border-b border-purple-500 py-3 outline-none w-full
              placeholder:text-white focus:border-green transition-all resize-none mb-12`}
            ></textarea>
            <button
              disabled={isLoading}
              className={`btn btn-lg bg-green text-primary  font-bold cursor-pointer ${
                isLoading && 'cursor-wait'
              } `}
            >
              {buttonText}
            </button>
            {/* resume download */}
          </motion.form>
        </div>
      </div>
    </div>
  )
}
export default Contact
