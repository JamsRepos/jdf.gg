import { useEffect, useState } from 'react';
import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { getSectionAnimation } from '../animations';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, I'm {author.name}, a versatile IT professional with a passion for
            learning and staying up-to-date with emerging technologies. While
            building my own projects, I discovered a love for front-end development
            and honed my skills in Craft CMS, Tailwind, NPM, and Webpack while
            working at &#8203;
            <Link
              href="https://destinationcore.com/"
              target="_blank"
              className="text-accent"
            >
              DestinationCore
            </Link>.
          </p>

          <p>
            Recently, I've taken on a new challenge in cyber security,
            motivated by my desire to expand my knowledge and explore different
            areas of IT. I'm excited to apply my skills to secure and protect
            products, and I'm constantly learning and improving my abilities in
            Linux command line, both through my new job and by experimenting on
            my own servers.
          </p>

          <p>
            My future goals include climbing through the ranks of my new company,
            which has a diverse range of IT sectors that allow me to continue
            exploring different areas. With a mindset of staying flexible and
            adaptable, I'm excited to see where my IT journey takes me next.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
