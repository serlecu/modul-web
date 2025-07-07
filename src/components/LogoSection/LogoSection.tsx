import React, { useEffect, useRef, useState, useMemo, forwardRef } from 'react';
import Box from '../Box/Box';
import styles from './LogoSection.module.css';
import logo from '../../assets/m.svg';

const emptyDOMRect = new DOMRect(0, 0, 0, 0);

/**
 * Component that displays a logo and title in a styled box.
 *
 * @param top - The top position of the logo section in pixels as Y position.
 * @param left - The left position of the logo section in pixels as X position.
 * @param section - The section type for color styling the box.
 */
export default function LogoSection({
  width = 460,
  height = 94,
  top = 0,
  left = 0,
  title = 'modul',
  section = 'default',
}: {
  width: number;
  height: number;
  top: number;
  left: number;
  title: string;
  section: 'default' | 'bg' | 'live' | 'edu' | 'comm';
}) {
  const notch = 16;
  const boxHeight = height - notch;
  const logoWidth = height * 0.5; // Width of the 'M' logo box

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
  const titleContent = useMemo(() =>
    (
      <h1 className={styles[`title-${section}`]}>
        {title}
      </h1>
    ),
    []);

  const refLogo = useRef<HTMLImageElement>(null);
  const refTitle = useRef<HTMLImageElement>(null);
  const [logoRect, setLogoRect] = useState<DOMRect>(emptyDOMRect);
  const [titleRect, setTitleRect] = useState<DOMRect>(emptyDOMRect);

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
    if (refLogo.current) {
      const updateRect = () => {
        const titleRect = refLogo.current!.getBoundingClientRect() || emptyDOMRect;
        setTitleRect(titleRect);
      };
      // Set the initial height
      updateRect();
      // Create a ResizeObserver to update the height on resize
      const resizeTitle = new ResizeObserver(updateRect);
      resizeTitle.observe(refLogo.current!);
      return () => {
        resizeTitle.disconnect();
      };
    }
  }, []);

  return (
    <div
      className={styles.logoSection}
      style={{
        width: logoRect.width + titleRect.width,
        height: logoRect.height + notch * 4,
        top: top,
        left: left,
      }}
    >
      <Box
        key={'hl-logo'}
        ref={refLogo}
        boxWidth={'auto'}
        boxHeight={'auto'}
        strokeWidth={1}
        notchSize={notch}
        layer={1}
        posX={notch}
        posY={notch * 2}
        section={section}
        content={
          logoContent
        }
      />
      <Box // LOGO_Meka
        ref={refTitle}
        boxWidth={width - logoWidth}
        boxHeight={boxHeight + notch}
        strokeWidth={1}
        content={titleContent}
        layer={1}
        posX={logoRect.width + notch * 2 - 2}
        posY={-logoRect.height + notch}
        section={section}
      />
      <Box
        key={'mainBoxHeight'}
        boxWidth={titleRect.width}
        boxHeight={notch * 3}
        strokeWidth={1}
        layer={0}
        posX={logoRect.width + notch * 2 - 2}
        posY={-logoRect.height + notch * 2}
        section="bg"
      />
    </div>
  );
}