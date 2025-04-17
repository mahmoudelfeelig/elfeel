import { motion } from 'framer-motion';

export const Stats = () => (
  <section id="stats" className="py-20 px-4 bg-dark-800">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">My Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: '4+', label: 'Years of Academic Excellence' },
          { number: '3+', label: 'Years of Coding Experience' },
          { number: '20+', label: 'Personal Projects' },
          { number: '5+', label: 'Professional Projects' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-700 p-6 rounded-xl hover:bg-dark-600 transition-colors"
          >
            <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
            <div className="text-gray-300 text-lg">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
