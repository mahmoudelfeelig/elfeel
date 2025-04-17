import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_fsuikch',
      'template_ewge4bi',
      form.current,
      'U51UwT-D0Ghjxx3jL'
    )
    .then(() => {
      alert('Message successfully sent!');
      form.current.reset();
    }, (error) => {
      alert(`Error sending message: ${error.text}`);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-dark-900 pt-24">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-dark-800 p-12 rounded-3xl shadow-2xl border border-purple-500/20"
        >
          <h2 className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-magenta-400">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-magenta-500/10 p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <FiMail className="text-3xl text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">Email</h3>
                    <a 
                      href="mailto:mahmoudelfeelig@gmail.com" 
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      mahmoudelfeelig@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <FiPhone className="text-3xl text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">Phone</h3>
                    <p className="text-gray-400">+49 1523 8498263</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FiMapPin className="text-3xl text-purple-400" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">Location</h3>
                    <p className="text-gray-400">Berlin, Germany</p>
                  </div>
                </div>
              </div>

              <div className="bg-dark-700 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">Tech Stack</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'python', icon: '🐍', name: 'Python' },
                    { id: 'react', icon: '⚛️', name: 'React' },
                    { id: 'swift', icon: '📱', name: 'Swift' },
                    { id: 'nextjs', icon: '🔗', name: 'Next.js' },
                    { id: 'ai_ml', icon: '🤖', name: 'AI/ML' },
                    { id: 'godot', icon: '🎮', name: 'Godot' }
                  ].map((tech) => (
                    <div 
                      key={tech.id}
                      className="p-3 bg-purple-500/10 rounded-lg text-center hover:bg-purple-500/20 transition-colors"
                    >
                      <div className="text-2xl mb-1">{tech.icon}</div>
                      <span className="text-gray-300 text-sm">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="bg-dark-700 p-8 rounded-2xl">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b-2 border-purple-500/30 focus:border-purple-500 focus:outline-none py-4 text-xl text-gray-100 placeholder-gray-500"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b-2 border-purple-500/30 focus:border-purple-500 focus:outline-none py-4 text-xl text-gray-100 placeholder-gray-500 mt-8"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full bg-transparent border-b-2 border-purple-500/30 focus:border-purple-500 focus:outline-none py-4 text-xl text-gray-100 placeholder-gray-500 mt-8"
                  required
                />
                <button 
                  type="submit"
                  className="mt-12 w-full bg-gradient-to-r from-purple-500 to-magenta-500 text-white py-4 rounded-xl font-bold text-xl hover:opacity-90 transition-opacity"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};