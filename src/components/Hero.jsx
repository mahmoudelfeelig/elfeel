import React from 'react'
import avatar from '../assets/avatar.png'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 mt-32 px-10">
      <div className="md:w-2/3">
        <h2 className="text-green-500 text-xl mb-2">Hi There!</h2>
        <h1 className="text-4xl font-bold mb-4">I Am a <span className="text-green-500">Penetration Tester</span></h1>
        <p className="text-lg leading-7">
          My name is CrypticSploit, and I am a Security Engineer, Pentester, Redteamer, and Exploit Developer. 
          Welcome to my website/blog. The goal of this platform is to educate anyone interested in 
          information security about the best methods of red team tactics, pentesting, and more.
        </p>
        <button className="mt-6 bg-black border-2 border-green-500 text-green-500 px-6 py-2 rounded hover:bg-green-500 hover:text-black">
          My Blog
        </button>
      </div>
      <img src={avatar} alt="avatar" className="w-64 rounded-3xl shadow-lg" />
    </section>
  )
}

export default Hero
