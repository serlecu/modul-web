import React, { useEffect, useRef, useState, useMemo, forwardRef } from 'react';
import Box from '../Box/Box';
import BoxM from '../pure/BoxM/BoxM';
import BoxTitleBig from '../pure/BoxTitleBig/BoxTitleBig';
import useRectRef from '@/hooks/useRectRef';
import styles from './LogoSection.module.css';
import { sectionColor } from '../pure/BoxTitleBig/BoxTitleBig';

interface LogoSectionProps {
  top: number;
  left: number;
  title: string;
  section: 'default' | 'live' | 'edu' | 'comm';
  subtitle?: string | null; // Optional subtitle for the logo section
}

/**
 * Component that displays a logo and title in a styled box.
 *
 * @param top - The top position of the logo section in pixels as Y position.
 * @param left - The left position of the logo section in pixels as X position.
 * @param section - The section type for color styling the box.
 */
function LogoSection({
  top = 0,
  left = 0,
  title = 'modul',
  section = 'default',
  subtitle = null,
}: LogoSectionProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const notch = 24;

  // const [logoRect, refLogo] = useRectRef<HTMLDivElement>();
  // const [titleRect, refTitle] = useRectRef<HTMLDivElement>();
  const [logoWidth, logoHeight, logoTop, logoLeft, refLogo] = useRectRef<HTMLDivElement>(100, 100);
  const [titleWidth, titleHeight, titleTop, titleLeft, refTitle] = useRectRef<HTMLDivElement>(100, 100);
  const [subtitleWidth, subtitleHeight, subtitleTop, subtitleLeft, refSubtitle] = useRectRef<HTMLDivElement>(100, 100);
  const [bgWidth, bgHeight, bgTop, bgLeft, refBgLogo] = useRectRef<HTMLDivElement>(100, 100);


  return (
    <div
      ref={ref}
      className={styles.logoSection}
      style={{
        position: 'relative',
        display: 'block',
        top: top,
        left: left,
        padding: `${0}px ${0}px`,
        width: `${logoWidth + titleWidth + notch * 2}px`,
        height: `${logoHeight + subtitleHeight + notch * 3}px`,
      }}
    >
      <BoxM
        // key={'logoBox'}
        ref={refLogo}
        posX={notch}
        posY={0}
        logoSize={98}
        notchSize={notch}
        layer={1}
        isFill={false}
        section={section}
      />
      <BoxTitleBig
        // key={'titleBox'}
        ref={refTitle}
        posX={logoWidth + notch * 2}
        posY={-notch}
        boxHeight={logoHeight + notch + 8} // still thinks notch is 24, so +8=32
        layer={1}
        isFill={false}
        section={section}
        title={title}
      />
      <Box
        // key={'bgBox'}
        ref={refBgLogo}
        boxWidth={titleWidth + notch}
        boxHeight={notch * 4}
        posX={logoWidth + notch}
        posY={logoHeight}
        layer={0}
        notchSize={notch}
        section={'bg'}
      />
      <Box
        // key={'subtitleBox'}
        ref={refSubtitle}
        boxWidth={'auto'}
        boxHeight={'auto'}
        posX={logoWidth + notch * 2}
        posY={logoHeight + notch * 2}
        layer={1}
        isFill={false}
        section={section}
        content={
          <h3 style={{
            margin: '16px 16px 0px 16px',
            fontSize: '2rem',
            color: sectionColor[section],
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-display)',
            lineHeight: '1.5',
            }}
          >
            {subtitle?.toUpperCase() || ''}
          </h3>
        }
      />
    </div>
  );
}

export default forwardRef<HTMLDivElement, LogoSectionProps>(LogoSection);