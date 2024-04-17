import { author, seoData } from '@/lib/content/portfolio';
import { HeroSectionType } from '@/lib/types/sections';
// import { resumeFileName } from '@/lib/utils/config'

export const heroSection: HeroSectionType = {
  subtitle: 'Hey 👋! My name is...',
  title: author.name + '.',
  tagline: seoData.description,
  description:
    'I am a versatile and self-taught IT professional with extensive experience across multiple sectors. From web development to cyber security and IT support, my broad skill set and passion for learning make me a valuable asset to any team.',
  // specialText: 'Currently available for remote job & freelance',
  // either button or simple text (information)
  // cta: {
  //   title: 'see my resume',
  //   url: `/${resumeFileName}`,
  //   hideInDesktop: true,
  // },
};
