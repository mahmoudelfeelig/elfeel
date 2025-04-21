import { TypeAnimation } from 'react-type-animation';
import avatar from '../assets/avatar.png';
import { motion } from 'framer-motion';


export const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <img 
          src={avatar} 
          alt="Mahmoud Elfil" 
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-purple-500/30 mb-8 hover:border-purple-500 transition-all"
        />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent">
          Mahmoud Elfil
        </h1>
        
        <TypeAnimation
          sequence={[
            'Software Developer',
            2000,
            'Networks Engineer',
            2000,
            'Data Analyst',
            2000,
            'Cybersecurity Enthusiast',
            2000,
            'Game Developer',
            2000,
            'Competitive Programmer',
            2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        />

        <div className="max-w-2xl mx-auto text-gray-300">
          <TypeAnimation
            sequence={[
              'Specializing in Web Development, iOS Development, and Data Analysis.',
              1000,
            ]}
            wrapper="p"
            cursor={false}
            speed={50}
          />
        </div>
      </motion.div>
    </div>
  </section>
);