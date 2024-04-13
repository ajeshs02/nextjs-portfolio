import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Work from '@/components/Work'
import Wrapper from '@/components/Wrapper'

const page = ({ searchParams }) => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <About />
      <Work searchParams={searchParams} />
      <Skills />
      <Contact />
      <Footer />
    </Wrapper>
  )
}
export default page
