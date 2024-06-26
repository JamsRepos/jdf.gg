'use client';
import { navbarSection } from '@/lib/content/navbar';
import { author } from '@/lib/content/portfolio';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, DarkModeButton, Link as CLink, NavButton } from '@/components';

import { fadeIn, slideIn } from '@/styles/animations';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const hideNavWhileScrolling = ({
  id = 'navbar',
  offset = 0,
  when = true,
}: {
  id?: string;
  offset?: number;
  when: boolean;
}) => {
  const nav = document.getElementById(id);
  if (!nav) return;

  let prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    if (when) {
      const curScrollPos = window.pageYOffset;
      if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
      else nav.style.top = '0';
      prevScrollPos = curScrollPos;
    }
  };
};

type NavItemsProps = {
  href?: string;
  children: React.ReactNode;
  index: number;
  delay: number;
  onClick?: (event: React.MouseEvent) => void;
};

const Navbar = () => {
  const { cta, navLinks } = navbarSection;
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;

  useEffect(() => {
    hideNavWhileScrolling({ when: !navbarCollapsed });
  }, [navbarCollapsed]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (id) {
      const element = document.getElementById(id.toString());
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <motion.header
      variants={fadeIn(0.5)}
      initial="hidden"
      animate="show"
      id="navbar"
      className="px-8 md:px-6 xl:px-12 py-4 fixed inset-x-0 top-0 right-0 flex justify-between items-end z-50 duration-500 backdrop-blur-lg"
    >
      <h1 className="font-signature text-accent capitalize text-2xl relative group top-1">
        <CLink
          href="/#hero"
          className="block"
          onClick={(e) => handleClick(e, 'hero')}
        >
          {author.name}
        </CLink>
      </h1>

      <NavButton
        onClick={() => {
          setNavbarCollapsed((prev) => !prev);
        }}
        navbarCollapsed={navbarCollapsed}
        className="md:invisible"
      />

      {(navbarCollapsed || windowWidth > md) && (
        <nav className="capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto">
          <ul className="list-style-none flex flex-col gap-3 lg:gap-5 xl:gap-6 md:flex-row items-stretch md:items-center">
            {navLinks.map(({ name, url }, i) => (
              <NavItem
                key={i}
                href={url}
                index={i}
                delay={ANIMATION_DELAY}
                onClick={() => setNavbarCollapsed(false)}
                handleClick={handleClick}
              >
                {name}
              </NavItem>
            ))}

            <div className="flex justify-between gap-5 xl:gap-6 items-center">
              {cta && (
                <Button
                  type="link"
                  href={cta.url}
                  sameTab={cta?.sameTab}
                  variants={slideIn({
                    delay: ANIMATION_DELAY + navLinks.length / 10,
                    direction: 'down',
                  })}
                  initial="hidden"
                  animate="show"
                >
                  {cta.title}
                </Button>
              )}
              <DarkModeButton
                onClick={() => setNavbarCollapsed(false)}
                variants={slideIn({
                  delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                  direction: 'down',
                })}
                initial="hidden"
                animate="show"
              />
            </div>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

const NavItem = ({
  href,
  children,
  onClick,
  index,
  delay,
  handleClick,
}: NavItemsProps & {
  handleClick: (e: React.MouseEvent, id: string) => void;
}) => {
  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href?.replace('/#', '') || children;
    if (id) {
      handleClick(e, id.toString());
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.li
      className="group"
      variants={slideIn({ delay: delay + index / 10, direction: 'down' })}
      initial="hidden"
      animate="show"
    >
      <CLink
        href={href || `/#${children}`}
        className="p-2 hover:text-accent duration-500 block"
        onClick={handleLinkClick}
      >
        {children}
      </CLink>
    </motion.li>
  );
};

export default Navbar;
