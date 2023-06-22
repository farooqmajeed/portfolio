import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'

export default function Home() {
  return (
    <div className="h-screen w-full bg-slate-800 text-white snap-y snap-mandatory z-0 overflow-scroll">
      <Header />
      <section id="hero" className='snap-center'>
        <Hero />
      </section>
    </div>
  )
}
