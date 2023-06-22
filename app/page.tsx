import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-800 text-white snap-y snap-mandatory z-0 overflow-scroll">
      <Header />
      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>
      <section id="experience" className='snap-center'>
        <Experience />
      </section>

    
    </div>
  )
}
