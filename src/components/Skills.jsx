import React from 'react'

const skills = [
  { name: "Penetration Testing", level: 95 },
  { name: "WebApp Pentesting", level: 75 },
  { name: "Exploit Development", level: 85 },
  { name: "Red Team Tactics", level: 90 },
]

const Skills = () => {
  return (
    <section className="px-10 pb-20">
      <h2 className="text-2xl font-bold mb-6"><span className="text-green-500">My</span> Skills</h2>
      {skills.map((skill, idx) => (
        <div key={idx} className="mb-4">
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded">
            <div className="h-3 bg-green-500 rounded" style={{ width: `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Skills
