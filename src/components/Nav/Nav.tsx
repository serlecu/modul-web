import React, { useState, useEffect, useRef, useMemo } from 'react';
import Box from '../Box/Box';
import styles from './Nav.module.css';
import useRectRef from '@/hooks/useRectRef2';
import BoxM from '../pure/BoxM/BoxM';

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


  // Content for the navigation buttons
  // List of buttons that will be displayed in the navigation bar
  const navButtonsContent = useMemo(() => (
    <ul className={styles.navButtonsList}>
      <li onClick={() => scrollSetter(20)}>EVENTOS</li>
      <li onClick={() => scrollSetter(10)}>NOSOTROS</li>
    </ul>
  ), [scrollSetter]);

  const [logoWidth, logoHeight, logoTop, logoLeft, refLogo] = useRectRef<HTMLDivElement>(100, 100);
  const [subtitleWidth, subtitleHeight, subtitleTop, subtitleLeft, refSubtitle] = useRectRef<HTMLDivElement>(100, 100);
  const [buttonsWidth, buttonsHeight, buttonsTop, buttonsLeft, refButtons] = useRectRef<HTMLDivElement>(100, 100);

  return (
    <div
      className={styles.navContainer}
      style={{
        left: posX,
        top: posY,
        width: logoWidth * 2 + subtitleWidth + notch * 2,
        height: logoHeight + notch,
      }}
    >
      <BoxM
        ref={refLogo}
        posX={notch}
        posY={0}
        logoSize={48}
        notchSize={notch}
        layer={1}
        isFill={false}
      />
      <Box
        boxWidth={logoWidth + notch * 2}
        boxHeight={notch * 4}
        strokeWidth={1}
        notchSize={notch}
        posX={0}
        posY={logoHeight + notch}
        layer={0}
        section="bg"
      />
      <Box
        ref={refButtons}
        boxWidth={'auto'}
        boxHeight={'auto'}
        strokeWidth={1}
        notchSize={notch}
        posX={notch}
        posY={logoHeight + notch * 3}
        section="default"
        layer={1}
        content={
          navButtonsContent
        }
      />
      <div
        ref={refSubtitle}
        style={{
            position: 'absolute',
            top: (logoHeight * 0.5) - notch,
            left: logoWidth + notch * 3,
            width: 'fit-content',
            height: 'fit-content',
        }}
      >
        <h1
          className={styles.subtitle}
        >
          Plataforma de<br />Arte Medial
        </h1>
      </div>
    </div>
  );
}