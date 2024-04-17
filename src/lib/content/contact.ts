import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
  title: 'How to Reach Me',
  subtitle: 'Want to talk?',
  paragraphs: [
    'While I’m not currently seeking new opportunities, I appreciate your interest in my work. If you’d like to chat or have any questions, please don’t hesitate to get in touch.',
    'You can reach me directly by clicking the button below. Alternatively, if you prefer to chat informally, feel free to drop me a message on my LinkedIn.',
  ],
  link: `mailto:${author.email}`,
};
