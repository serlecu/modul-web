import { useRef, forwardRef, useEffect, useState } from 'react';
import Box from '../Box/Box';
import styles from './AboutCard.module.css';

interface AboutCardProps {
  posX: number;
  posY: number;
  title: string;
  text: string;
  accent: 'live' | 'edu' | 'comm' | 'default';
}

function AboutCard({
  posX = 0,
  posY = 0,
  title = '',
  text = '',
  accent = 'default',
}: AboutCardProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const notchSize = 8;
  const [titleHeight, setTitleHeight] = useState<number | null>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { offsetHeight } = titleRef.current!;
        setTitleHeight(offsetHeight);
      });
      resizeObserver.observe(titleRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <div className={styles.aboutCard} ref={ref}>
      <Box
        ref={titleRef}
        boxClass={`fill-${accent}`}
        posX={posX + notchSize}
        posY={posY}
        boxWidth={'auto'}
        boxHeight={'auto'}
        strokeWidth={1}
        notchSize={notchSize}
        layer={1}
        isFill
        section={accent}
        content={<p className={styles.title}>{title}</p>}
      />
      { titleHeight !== null && (
        <Box
          ref={textRef}
          boxClass={`stroke-${accent}`}
          posX={posX}
          posY={posY + notchSize + titleHeight}
          boxWidth={250}
          boxHeight={'auto'}
          strokeWidth={1}
          notchSize={notchSize}
          section={accent}
          content={<p className={styles.content}>{text}</p>}
          layer={0}
        />
      )}
    </div>
  );
}

export default forwardRef<HTMLDivElement, AboutCardProps>(AboutCard);