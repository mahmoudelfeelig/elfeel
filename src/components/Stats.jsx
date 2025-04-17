import React from 'react'

const stats = [
  { value: "4+", label: "Years of Security Experience" },
  { value: "5+", label: "Years of Penetration Testing" },
  { value: "80+", label: "CTF Competitions/Flags" },
  { value: "5+", label: "Technical & Practical Certs" },
]

const Stats = () => {
  return (
    <section className="px-10 py-10">
      <h2 className="text-2xl font-bold mb-6">I'm <span className="text-green-500">CrypticSploit.</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-zinc-900 p-6 rounded text-center">
            <h3 className="text-green-500 text-3xl font-bold">{item.value}</h3>
            <p className="mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
