import { motion } from 'framer-motion';

export const Contact = () => (
  <section id="contact" className="py-20 px-4 bg-dark-900">
    <div className="container mx-auto max-w-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Get In Touch</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-dark-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-dark-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 placeholder-gray-400"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="w-full bg-dark-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-100 placeholder-gray-400"
          />
          <button className="w-full bg-gradient-to-r from-purple-500 to-magenta-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
        
        <div className="mt-12 text-center space-y-2">
          <p className="text-gray-400">Or reach me directly at:</p>
          <div className="text-purple-400 space-x-4">
            <a href="mailto:CrypticSploit@protonmail.com" className="hover:text-magenta-400 transition-colors">
              CrypticSploit@protonmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);