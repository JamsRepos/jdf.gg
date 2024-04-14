import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, ProjectCard, Wrapper } from '../components';
import { PROJECTS_INITIALLY } from '../utils/config';
import { sortByYear } from '../utils/helper';
import { projectsSection } from '../utils/portfolio';
import { getSectionAnimation, projectVariants } from '../animations';

const Projects = () => {
  const { projects, title, footer } = projectsSection;
  const [showMore, setShowMore] = useState(false);
  const topProjects = projects.slice(0, PROJECTS_INITIALLY);

  const visibleProjects = showMore ? projects : topProjects;

  return (
    <Wrapper id="projects" animate={false} {...getSectionAnimation}>
      <motion.h2 className="heading-secondary text-center !mb-12">
        {title}
      </motion.h2>

      <div className="grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center">
        {sortByYear(visibleProjects).map((project, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
            />
          );
        })}
      </div>

      {projects.length > PROJECTS_INITIALLY && (
        <Button
          size="lg"
          className="!mt-12"
          center
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? 'show less' : 'show more'}
        </Button>
      )}

      <motion.p
        className="text-sm text-center mt-6"
        initial="hidden"
        animate="show"
      >
        {footer}
      </motion.p>
    </Wrapper>
  );
};

export default Projects;
