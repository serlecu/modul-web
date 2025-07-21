import React, { useState, useRef, useEffect, forwardRef, useMemo } from 'react';
import LogoSectionTitle from '../LogoSectionTitle/LogoSectionTitle';
import Box from '../../Box/Box';
import useRectRef from '@/hooks/useRectRef';

// implementar este enum en vez de clases CSS
export const sectionColor: Record<string, string> = {
  default: '#FFFFFF',
  live: '#EF3B39',
  edu: '#23B0E6',
  comm: '#F6C514',
  bg: '#555555',
};


interface BoxTitleBigProps {
  posX?: number;
  posY?: number;
  boxHeight: number;
  notchSize?: number;
  layer?: number;
  isFill?: boolean;
  smallNotch?: boolean;
  section: 'default' | 'live' | 'edu' | 'comm';
  title: string;
}

function BoxTitleBig(
  {
    posX,
    posY,
    boxHeight,
    layer = 0,
    isFill = false,
    section = 'default',
    title = 'modul',
   }: BoxTitleBigProps,
   ref: React.Ref<HTMLDivElement>,
) {
  // const [fontSize, setFontSize] = useState(boxHeight * 0.055);
  const fontSize = boxHeight * 0.055; // Calculate font size based on box height
  const marTop = fontSize * -4;
  const padRight = 8;
  const padBot = fontSize * 0.48;
  const padLeft = 0;
  const margin = `${marTop}px ${padRight}px ${padBot}px ${padLeft}px`;
  const color = isFill ? 'black' : sectionColor[section];
  const bgColor = isFill ? sectionColor[section] : 'transparent';

  const [textWidth, textHeight, textTop, textLeft, refText] = useRectRef<HTMLHeadingElement>(100, 100);
  console.log('BoxTitleBig text: ', textWidth, textHeight, textTop, textLeft);

  return (
    <Box
      ref={ref}
      boxWidth={'auto'}
      boxHeight={'auto'}
      strokeWidth={1}
      content={
        <h1
          ref={refText}
          style={{
            margin: margin,
            color: color,
            backgroundColor: bgColor,
            fontSize: `${fontSize}rem`,
            fontWeight: 200,
          }}
        >
          {title}
        </h1>
      }
      layer={layer}
      posX={posX}
      posY={posY}
      isFill={isFill}
      section={section}
    />
  );
}

export default forwardRef<HTMLDivElement, BoxTitleBigProps>(BoxTitleBig);