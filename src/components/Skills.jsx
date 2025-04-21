import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import PropTypes from 'prop-types';

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ delay: index * 0.1 }}
    className="bg-dark-700 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
  >
    <h3 className="text-xl font-semibold mb-4 text-purple-400">{skill.title}</h3>
    <div className="h-2 bg-dark-600 rounded-full mb-3">
      <div
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-magenta-500"
        style={{ width: `${skill.percentage}%` }}
      />
    </div>
    <div className="flex justify-between text-gray-400 text-sm mb-2">
      <span>Proficiency</span>
      <span>{skill.percentage}%</span>
    </div>
    <p className="text-gray-300 text-sm">{skill.description}</p>
  </motion.div>
);
SkillCard.propTypes = {
  skill: PropTypes.shape({
    title: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-dark-800">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-purple-400">Technical Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <SkillCard key={skill.id} skill={skill} index={index} />
        ))}
      </div>
    </div>
  </section>
);
