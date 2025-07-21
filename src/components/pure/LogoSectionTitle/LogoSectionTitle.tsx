import React, { useState, useEffect, forwardRef } from 'react';

interface TitleProps {
  title: string;
  color: string;
  bgColor: string;
  margin?: string;
  padding?: string;
  fontSize?: number;
}

function LogoSectionTitle(
  {
    title,
    color = 'white',
    bgColor = 'transparent',
    margin = '0px',
    padding = '0px',
    fontSize = 1.5,
  }: TitleProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontReady(prev => !prev); // Toggle to force re-render
      });
      // Optionally, listen for individual font loads:
      document.fonts.addEventListener('loadingdone', () => {
        setFontReady(prev => !prev);
      });
    }
  }, []);

  return (
    <div ref={ref} style={{ border: '1px solid orange' }}>
      <h1
        style={{
          margin: margin,
          padding: padding,
          color: color,
          backgroundColor: bgColor,
          fontSize: `${fontSize}rem`,
          fontWeight: 200,
          // border: '1px solid orange',
        }}
      >
        {title}
      </h1>
    </div>
  );
}

export default forwardRef<HTMLDivElement, TitleProps>(LogoSectionTitle);