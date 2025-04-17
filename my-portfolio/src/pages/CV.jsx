import { motion } from 'framer-motion';
import { GiElephant } from 'react-icons/gi';

export const CV = () => (
  <div className="min-h-screen bg-dark-900 pt-28 pb-20 px-4">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800 rounded-3xl shadow-2xl p-12"
      >
        <div className="text-center mb-16">
          <GiElephant className="w-24 h-24 text-purple-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-100 mb-2">Mahmoud Elfeel</h1>
          <p className="text-xl text-gray-400">Networking Engineering Student</p>
        </div>

        <div className="space-y-12">
          {/* Objective */}
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">Objective</h2>
            <p className="text-gray-300 leading-relaxed">
              Motivated Networking Engineering student (5th semester) with hands-on experience in data analysis, 
              computer vision, web, and app development. Passionate about applying technical knowledge to real-world 
              problems. Recipient of multiple academic scholarships for outstanding performance.
            </p>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">Experience</h2>
            <div className="space-y-6">
              <div className="bg-dark-700 p-6 rounded-xl">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-100">IAV GmbH — Working Student</h3>
                  <div className="text-gray-400 text-sm">
                    <p>📍 Berlin, Germany</p>
                    <p>📅 Oct 2024 – Present</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Conducted data analysis for automotive applications using Yolo</li>
                  <li>Built computer vision pipelines for image-based insights</li>
                  <li>Developed web applications using Next.js</li>
                  <li>Created iOS applications using Swift</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">Projects</h2>
            <div className="grid gap-6">
              <div className="bg-dark-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">Network Communication System (2024)</h3>
                <p className="text-gray-300">
                  - Built a robust client-server architecture using Python, Socket Programming, and TCP/IP<br/>
                  - Improved reliability and data transfer across multiple clients
                </p>
              </div>
              <div className="bg-dark-700 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">AI Board Game with GUI (2024)</h3>
                <p className="text-gray-300">
                  - Designed and implemented a strategy board game with AI (MinMax) logic and GUI using JavaFX<br/>
                  - Enhanced UX through smooth interface and competitive AI behavior
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">Education</h2>
            <div className="bg-dark-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-100 mb-2">German International University, Berlin</h3>
              <p className="text-gray-300">
                B.Sc. in Networking Engineering | 📅 2023 – Present<br/>
                GPA: 0.87<br/>
                Relevant Coursework: Data Structures and Algorithms, Networking 101
              </p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-purple-400 mb-4 border-b border-purple-500/30 pb-2">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-purple-500/10 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-100 mb-2">Programming</h4>
                <p className="text-gray-300">Java, Python, JavaScript, Swift</p>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-100 mb-2">Tools & Libraries</h4>
                <p className="text-gray-300">JavaFX, NumPy, GitHub, CoPilot, Next.js</p>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-100 mb-2">Game Development</h4>
                <p className="text-gray-300">2D/3D games using Godot Engine</p>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-100 mb-2">Concepts</h4>
                <p className="text-gray-300">OOP, MinMax AI, Socket Programming</p>
              </div>
              <div className="bg-purple-500/10 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-100 mb-2">Soft Skills</h4>
                <p className="text-gray-300">Time Management, Problem-solving, Teamwork</p>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  </div>
);
