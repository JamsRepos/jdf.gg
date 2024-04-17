import { StringKeyValueType } from '@/lib/types';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  github: 'https://github.com/JamsRepos',
  linkedin: 'https://www.linkedin.com/in/james-david-finch/',
};

export const author = {
  name: 'James David Finch',
  email: 'portfolio@jdf.gg',
};

export const seoData = {
  title: author.name + "'s Portfolio",
  description:
    'Transforming businesses with innovative and secure IT solutions.',
  author: author.name,
  image: '/images/portraits/greyscale.jpg',
  url: 'https://jdf.gg/',
  keywords: [
    'James',
    'James Finch',
    'James David Finch',
    'jamesfinch',
    'jamesdavidfinch',
    'Portfolio',
    'James Portfolio',
    'James Finch Portfolio',
    'James David Finch Portfolio',
  ],
};
