import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  twitter: 'https://twitter.com/JamsSocials',
  github: 'https://github.com/LubricantJam',
  linkedin: 'https://www.linkedin.com/in/james-finch-a3564615b/',
};

export const author = {
  name: 'James Finch',
  email: 'portfolio@jdf.gg',
};

export const seoData = {
  title: 'James Finch | Self-taught Web Developer & Dev Ops Engineer',
  description:
    'James Finch is a self-taught IT professional who prides himself on his vast experience and knowledge across various IT sectors.',
  author: author.name,
  image:
    'https://avatars.githubusercontent.com/u/1347620?v=4',
  url: 'https://jdf.gg/',
  keywords: [
    'James',
    'James Finch',
    '@JamsSocials',
    'jamesfinch',
    'Portfolio',
    'James Portfolio ',
    'James Finch Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hey 👋! My name is',
  title: 'James Finch.',
  tagline: 'Building secure products with elegant solutions.',
  description:
    "A front-end developer turned product support engineer. Skilled in Craft CMS, Tailwind, NPM, and Webpack, I now specialize in Linux command line for cyber security. Passionate about problem-solving and learning, I'm an asset to any team.",
  // specialText: 'Currently available for remote job & freelance',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'About me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Docker',
      'Zero Trust',
      'Linux CLI',
      'Craft CMS',
      'Tailwind CSS',
      'NPM',
    ],
  },
  img: '/images/ai.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'What I Do',
  skills: [
    {
      id: getId(),
      title: 'Web & Software Development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/coding.json',
      },
      points: [
        'Building responsive commercial sites using Craft CMS.',
        'Building robust, one of a kind systems utilising PHP & MySQL.',
        'Maintain and moderate projects with GitHub & Atlassian suite.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'Sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'PHP', icon: 'logos:php' },
        { name: 'Lua', icon: 'logos:lua' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'NPM', icon: 'vscode-icons:file-type-npm' },
        { name: 'Webpack', icon: 'logos:webpack' },
        { name: 'GitHub', icon: 'icon-park:github' },
        { name: 'BitBucket', icon: 'vscode-icons:file-type-bitbucketpipeline' },
        { name: 'Craft CMS', icon: 'simple-icons:craftcms' },
        { name: 'Atlassian', icon: 'logos:atlassian' },
      ],
    },
    {
      id: getId(),
      title: 'Systems & Infrastructure',
      lottie: {
        light: '/lotties/cloudinfra.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Deploying & configuring cloud servers/baremetal linux servers.',
        'Deploying & configuring web hosting environments.',
        'Database magment using Mongo, Redis & MySQL.',
      ],
      softwareSkills: [
        { name: 'MySQL', icon: 'vscode-icons:file-type-mysql' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Redis', icon: 'logos:redis' },
        { name: 'Nginx', icon: 'logos:nginx' },
        { name: 'Apache', icon: 'logos:apache' },
        { name: 'Docker Compose', icon: 'vscode-icons:file-type-docker' },
        { name: 'Git', icon: 'fluent-mdl2:git-logo' },
        { name: 'cPanel', icon: 'logos:cpanel' },
        { name: 'WHMCS', icon: 'la:whmcs' },
        { name: 'Cloudflare', icon: 'logos:cloudflare' },
        { name: 'AWS', icon: 'vscode-icons:file-type-aws' },
        { name: 'Google Cloud', icon: 'vscode-icons:file-type-gcloud' },
        { name: 'Traefik', icon: 'devicon:traefikproxy' },
        { name: 'Unix', icon: 'flat-color-icons:linux' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "Where I've Worked",
  experiences: [
    {
      company: 'DestinationCore',
      companyUrl: 'https://destinationcore.com/',
      role: 'Front-end Web Developer',
      started: 'December 20200',
      upto: 'August 2022',
      tasks: [
        'Built dynamic and modular websites for various shopping centres & districts around the United Kingdom using handover designs.',
        'Constructed the folder structure and repository for our base repository for projects.',
        'Assisted new team members with onboarding and training to advance the teams overall knowledge and confidence in our products.',
        'Reviewed and assisted with changes on pull requests and workflows for various repositories.',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'NexusNation Website',
      url: 'https://web.archive.org/web/20201122115314/https://nexusnation.gg/',
      repo: 'https://github.com/LubricantJam/NexusNation-Website',
      img: '/images/NexusNation.png',
      year: 2020,
      tags: ['HTML5', 'Bootstrap', 'PHP'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "Want to talk?",
  paragraphs: [
    'I’m not currently looking for new opportunities but I thank you for considering me.',
    'I am not on a lot of social media sites, so if you would like to just chat then reach out!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Vatsal Singh',
  link: 'https://vatsalsinghkv.vercel.app/',
};
