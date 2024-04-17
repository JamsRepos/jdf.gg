import { getSectionAnimation } from '../animations';
import { TabList } from '../components';
import { experienceSection } from '../utils/portfolio';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-32 max-w-3xl mx-auto"
      {...getSectionAnimation}
    >
      <h2 className="heading-secondary">{experienceSection.title}</h2>
      <TabList experiences={experienceSection.experiences} />
    </motion.section>
  );
};

export default Experience;
