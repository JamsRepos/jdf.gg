import { ProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProjectCard = ({
  name,
  desc,
  url,
  repo,
  year,
  img,
  tags,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div
      {...rest}
      className="
      group bg-bg-secondary block w-full max-w-[350px] shadow-xl dark:shadow-2xl
      rounded-md overflow-hidden transition-all duration-200 cursor-default
      hover:outline-dashed outline-[3px] outline-offset-4 outline-accent
    "
    >
      <div className="relative overflow-hidden h-[200px]">
        <Image
          src={img}
          alt={name}
          width={300}
          height={300}
          placeholder="blur"
          blurDataURL={blurImageURL}
          className="w-full h-full object-cover object-top"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-2 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-bg-secondary-light backdrop-blur-sm">
          <span className="text-center text-dark-1 [text-shadow:_0_1px_0_rgb(0_0_0_/_50%)]">
            {desc}
          </span>
        </div>
      </div>
      <div className="p-4 py-3 space-y-1">
        <div className="flex justify-between items-center">
          <p className="text-xs capitalize font-mono">{tags.join(' | ')}</p>
          <div className="flex items-center space-x-1.5">
            {repo && (
              <a
                href={repo}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </a>
            )}
            {url ? (
              <a
                href={url}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            ) : (
              <a
                href={img}
                className="block hover:text-accent duration-200"
                target="_blank"
              >
                <Icon icon="akar-icons:image" width={22} height={22} />
              </a>
            )}
          </div>
        </div>
        <h4 className="flex justify-between capitalize font-medium duration-200">
          <span>{name}</span>
          <span className="mr-1">{year}</span>
        </h4>
      </div>
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
