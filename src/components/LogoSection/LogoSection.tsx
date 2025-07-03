import React, { useEffect, useRef, useState } from 'react';
import Box from '../Box/Box';
import styles from './LogoSection.module.css';

const emptyDOMRect = new DOMRect(0, 0, 0, 0);

export default function LogoSection({
  width = 460,
  height = 94,
  top = 0,
  left = 0,
  section = 'default',
}: {
  width: number;
  height: number;
  top: number;
  left: number;
  section: 'default' | 'bg' | 'live' | 'edu' | 'comm';
}) {
  const notchSize = 16;
  const zeroX = width / 2;
  const zeroY = height / 2;
  const boxHeight = height - notchSize;
  const logoWidth = 180; // Width of the 'M' logo box
  const logoHeight = 180; // Height of the 'M' logo box

  const refLogo = useRef<HTMLImageElement>(null);
  const [logoRect, setLogoRect] = useState<DOMRect>(emptyDOMRect);

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

  return (
    <div
      className={styles.logoSection}
      style={{
        width: width,
        height: height,
        top: top,
        left: left,
      }}
    >
      <Box // LOGO_M
        ref={refLogo}
        boxWidth={180}
        boxHeight={boxHeight}
        strokeWidth={2}
        layer={1}
        posX={notchSize}
        posY={notchSize * 2}
        content={<p>M</p>}
        section={section}
      />
      <Box // LOGO_Meka
        boxWidth={width - logoWidth}
        boxHeight={boxHeight}
        strokeWidth={2}
        content={<p>meka</p>}
        layer={1}
        posX={notchSize + logoWidth}
        posY={0}
        section={section}
      />
      <Box
        key={'mainBoxHeight'}
        boxWidth={0}
        boxHeight={0}
        strokeWidth={0}
        layer={0}
        content={<></>}
        posX={notchSize}
        posY={0}
        section="bg"
      />
    </div>
  );
}