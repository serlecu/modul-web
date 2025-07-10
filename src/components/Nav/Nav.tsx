import React, { useState, useEffect, useRef, useMemo } from 'react';
import Box from '../Box/Box';
import styles from './Nav.module.css';
import logo from '../../assets/m.svg';

interface NavProps {
  posX: number;
  posY: number;
  scrollSetter: React.Dispatch<React.SetStateAction<number>>;
}

const emptyDOMRect = new DOMRect(0, 0, 0, 0);

/**
 * Navigation component that displays a logo, subtitle, and navigation buttons.
 * Should be used in the index page of the application.
 *
 * @param posX - The x-coordinate position of the navigation bar.
 * @param posY - The y-coordinate position of the navigation bar.
 * @param scrollSetter - The setter of a useState hook to control the scroll position, that
 * will be used to scroll to different sections of the page when the buttons are clicked.
 */
export default function Nav({
  posX,
  posY,
  scrollSetter,
}: NavProps) {
  const notch = 8;
  const logoWidth = 48; // Width in px of the logo (m) inside the box

  const refLogo = useRef<HTMLImageElement>(null);
  const refSubtitle = useRef<HTMLParagraphElement>(null);

  const [logoRect, setLogoRect] = useState<DOMRect>(emptyDOMRect);
  const [subtitleRect, setSubtitleRect] = useState<DOMRect>(emptyDOMRect);

  // Content for logo's box
  // Could also be a link to home page or similar
  const logoContent = useMemo(() =>
    (<img
      src={logo}
      alt="modul logo"
      style={{
        position: 'relative',
        padding: `${logoWidth * 0.375}px ${logoWidth * 0.125}px ${logoWidth * 0.375}px ${logoWidth * 0.375}px`,
        width: logoWidth }}
    />),
    []);
  // Content for the navigation buttons
  // List of buttons that will be displayed in the navigation bar
  const navButtonsContent = useMemo(() => (
    <ul className={styles.navButtonsList}>
      <li onClick={() => scrollSetter(20)}>EVENTOS</li>
      <li onClick={() => scrollSetter(10)}>NOSOTROS</li>
    </ul>
  ), [scrollSetter]);

  useEffect(() => {
    if (refLogo.current) {
      const updateRect = () => {
        const logoRect = refLogo.current!.getBoundingClientRect() || emptyDOMRect;
        setLogoRect(logoRect);
      };
      // Set the initial height
      updateRect();
      // Create a ResizeObserver to update the height on resize
      const resizeLogo = new ResizeObserver(updateRect);
      resizeLogo.observe(refLogo.current!);
      return () => {
        resizeLogo.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (refSubtitle.current) {
      const updateRect = () => {
        const subtitleRect = refSubtitle.current!.getBoundingClientRect() || emptyDOMRect;
        setSubtitleRect(subtitleRect);
      };
      // Set the initial height
      updateRect();
      // Create a ResizeObserver to update the height on resize
      const resizeSubtitle = new ResizeObserver(updateRect);
      resizeSubtitle.observe(refSubtitle.current!);
      return () => {
        resizeSubtitle.disconnect();
      };
    }
  }, []);

  return (
    <div
      className={styles.navContainer}
      style={{
        left: posX,
        top: posY,
      }}
    >
      <Box
        key={'nav-logo'}
        ref={refLogo}
        boxWidth={'auto'}
        boxHeight={'auto'}
        strokeWidth={1}
        notchSize={notch}
        posX={notch}
        posY={0}
        layer={1}
        section="default"
        content={
          logoContent
          // <img
          //   src={logo}
          //   alt="modul logo"
          //   style={{
          //     position: 'relative',
          //     padding: '18px 6px 18px 18px',
          //     width: 48 }}
          // />
        }
      />
      <h1
        ref={refSubtitle}
        className={styles.subtitle}
        style={{
          position: 'relative',
          top: -(logoRect.height * 0.5) + notch,
          left: logoRect.right - notch }}
      >
        Plataforma de<br />Arte Medial
      </h1>
      <Box
        key={'nav-bg-01'}
        boxWidth={logoRect.width + notch * 2}
        boxHeight={notch * 4}
        strokeWidth={1}
        notchSize={notch}
        posX={0}
        posY={0 - subtitleRect.height + notch - 2}
        layer={0}
        section="bg"
      />
      <Box
        boxWidth={'auto'}
        boxHeight={'auto'}
        strokeWidth={1}
        notchSize={notch}
        posX={notch}
        posY={0 - subtitleRect.height}
        section="default"
        layer={1}
        content={
          navButtonsContent
        }
      />
    </div>
  );
}