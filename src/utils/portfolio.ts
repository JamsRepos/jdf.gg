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
  name: 'James David Finch',
  email: 'portfolio@jdf.gg',
};

export const seoData = {
  title: author.name + ' | Versatile IT Professional with Expertise in Web Development, Cyber Security, and IT Support.',
  description:
    author.name + ' is a versatile and self-taught IT professional with extensive experience across multiple sectors. From web development to cyber security and IT support, James’s broad skill set and passion for learning make him a valuable asset to any team.',
  author: author.name,
  image:
    '/images/greyscale.jpg',
  url: 'https://jdf.gg/',
  keywords: [
    'James',
    'James Finch',
    'James David Finch',
    '@JamsSocials',
    'jamesfinch',
    'Portfolio',
    'James Portfolio ',
    'James Finch Portfolio',
    'James David Finch Portfolio',
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
    title: 'Curriculum Vitae',
    // url: `#`,
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hey 👋! My name is...',
  title: author.name + '.',
  tagline: 'Transforming businesses with innovative and secure IT solutions.',
  description:
    "As a former front-end developer turned product support engineer, I specialize in Unix systems and cyber security. Skilled in Craft CMS, Tailwind, NPM, and Webpack, I bring a passion for problem-solving and continuous learning to any team.",
  // specialText: 'Currently available for remote job & freelance',
  // either button or simple text (information)
  // cta: {
  //   title: 'see my resume',
  //   url: `/${resumeFileName}`,
  //   hideInDesktop: true,
  // },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'About me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  // list: {
  //   title: 'Here are a few technologies I’ve been working with recently:',
  //   items: [
  //     'Docker',
  //     'Zero Trust',
  //     'Linux CLI',
  //     'Craft CMS',
  //     'Tailwind CSS',
  //     'NPM',
  //   ],
  // },
  img: '/images/greyscale.jpg',
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
        'Deploying & configuring cloud servers/bare-metal linux servers.',
        'Deploying & configuring web hosting environments.',
        'Database management using Mongo, Redis & MySQL.',
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
      started: 'December 2020',
      upto: 'August 2022',
      tasks: [
        'Developed dynamic, modular websites for shopping centers and districts throughout the United Kingdom, using responsive layouts and clean, efficient code.',
        'Spearheaded the development of a base repository and folder structure that served as the foundation for all projects, streamlining workflows and increasing team efficiency.',
        'Mentored and trained new team members, sharing best practices and advancing the team’s overall knowledge and confidence in our products.',
        'Reviewed and contributed to pull requests and workflows across multiple repositories, ensuring code quality and maintainability.',
      ],
    },
    {
      company: 'Town Close',
      companyUrl: 'https://townclose.com',
      role: 'IT Support Technician & Web Developer',
      started: 'May 2015',
      upto: 'January 2019',
      tasks: [
        'Collaborated on the development of a holiday program booking website, using Sage Pay payment integration to enable families to easily book and pay for their children’s attendance.',
        'Cultivated strong interpersonal skills while providing effective support to a diverse range of users across different generations.',
        'Thrived in a high-pressure environment, providing essential technical support to teachers and staff, ensuring that their needs were met and issues resolved in a timely and efficient manner.',
        'Managed over 300 Windows users, utilizing Active Directory and other Microsoft products to provide effective moderation and troubleshooting services.',
      ],
    },
    {
      company: 'NexusNation',
      companyUrl: 'https://web.archive.org/web/20201122115314/https://nexusnation.gg/',
      role: 'Founder & Lead Developer',
      started: 'August 2013',
      upto: 'June 2021',
      tasks: [
        'Developed and managed bespoke online game servers that served over 1.5 million unique users, providing a unique gaming experience and fostering a loyal community.',
        'Built a custom administration panel and statistics system that allowed the staff team to easily maintain the servers and track their performance, even when working remotely.',
        'Managed a team of 20 staff members, developing strong leadership and hospitality skills while ensuring that the team was meeting its goals and targets.',
        'Gained valuable experience with Unix systems, configuring firewalls to protect against Layer7 attacks and ensuring the security and stability of the servers.',
      ],
    },
    {
      company: 'NexusRoleplay',
      companyUrl: 'https://github.com/LubricantJam/Nexus-Roleplay',
      role: 'Network Owner',
      started: 'December 2015',
      upto: 'December 2016',
      tasks: [
        'Created and maintained a FiveM roleplay server operating on Grand Theft Auto V, serving hundreds of players and accumulating over 10,000 users.',
        'Utilized Lua, HTML, CSS, and JS to develop custom front-end UIs that communicate with server-side Lua to save data into a MySQL database.',
        'Implemented a self-coded rewards and donation system to generate income and provide perks for players.',
        'Developed a custom application system as an all-in-one solution, enabling the monitoring, editing, and responding to staff responses across multiple teams.',
      ],
    },
    {
      company: 'Nodeblast',
      companyUrl: 'https://web.archive.org/web/20160819124041/https://nodeblast.com/',
      role: 'Director & Lead Technician',
      started: 'December 2015',
      upto: 'December 2016',
      tasks: [
        'Provided live support to clients and expertly resolved server issues, resulting in world-class quality hosting services.',
        'Successfully captured the majority of the market share for server hosting in the popular game Garry’s Mod and other Source Engine games.',
        'Implemented automated systems for updating game servers, streamlining the update process and reducing downtime for clients. Utilized GitHub for version control and to ensure seamless deployment of updates.',
        'Demonstrated proficiency in installing and interlinking various systems, including cPanel, WHMCS, and TCAdmin.',
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
      url: 'https://github.com/LubricantJam/NexusNation-Website',
      repo: 'https://github.com/LubricantJam/NexusNation-Website',
      img: '/images/NexusNation.jpg',
      year: 2020,
      tags: ['HTML5', 'Bootstrap', 'PHP'],
    },
    {
      id: getId(),
      name: 'Nexus League Website',
      url: '/images/NexusLeague.jpg',
      repo: 'https://github.com/NexusLeague',
      img: '/images/NexusLeague.jpg',
      year: 2020,
      tags: ['HTML5', 'Bootstrap', 'Python'],
    },
    {
      id: getId(),
      name: 'Nodeblast Website',
      url: '/images/Nodeblast.jpg',
      repo: 'https://web.archive.org/web/20201122115314/https://nexusnation.gg/',
      img: '/images/Nodeblast.jpg',
      year: 2015,
      tags: ['HTML5', 'Bootstrap', 'PHP'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "Want to talk?",
  paragraphs: [
    'While I’m not currently seeking new opportunities, I appreciate your interest in my work. If you’d like to chat or have any questions, please don’t hesitate to get in touch.',
    'You can reach me directly by clicking the button below. Alternatively, if you prefer to chat informally, feel free to drop me a message on my LinkedIn.',
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
  title: 'Forked from Vatsal Singh',
  link: 'https://vatsalsinghkv.vercel.app/',
};
