import { motion } from 'framer-motion';

export const Hero = () => (
  <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent">
          CrypticSploit
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Security Engineer & Penetration Tester
        </p>
        <div className="max-w-2xl mx-auto text-gray-300">
          <p className="mb-4">
            Specializing in red team tactics, pentesting, and exploit development with a focus on
            rootkits and custom C2 frameworks.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);
