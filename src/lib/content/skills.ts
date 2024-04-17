import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: "What I've Used",
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
