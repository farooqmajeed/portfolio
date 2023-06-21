import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'

export default function Home() {
  return (
    <div className=" min-h-screen w-full bg-slate-800 text-white">
      <Header />
      <section id="hero">
        <Hero />
      </section>
    </div>
  )
}
