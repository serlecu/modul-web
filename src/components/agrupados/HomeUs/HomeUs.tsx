import { useEffect, useRef, useState } from 'react';
import Box from '../../Box/Box';
import AboutCard from '@/components/AboutCard/AboutCard';
import styles from './HomeUs.module.css';
import imgAbout from '../../../assets/home_about.png';

export default function HomeUs(
) {
  const notchSize = 8;
  const liveTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  const eduRef = useRef<HTMLDivElement>(null);
  const commRef = useRef<HTMLDivElement>(null);
  const [eduHeight, setEduHeight] = useState<number | null>(null);
  const [commHeight, setCommHeight] = useState<number | null>(null);

  useEffect(() => {
    if (eduRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { offsetHeight } = eduRef.current!;
        setEduHeight(offsetHeight);
        // eduRef.current.style.height = `${offsetHeight}px`;
      });
      resizeObserver.observe(eduRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
    if (commRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        const { offsetHeight } = commRef.current!;
        // commRef.current.style.height = `${offsetHeight}px`;
        setCommHeight(offsetHeight);
      });
      resizeObserver.observe(commRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <section id="home-about">
      <img src={imgAbout} className={styles.mokeimg} />
      {/* <AboutCard
        posX={0}
        posY={0}
        accent={'live'}
        title={'LIVE'}
        text={liveTxt}
      />
      <AboutCard
        ref={eduRef}
        posX={200}
        posY={32}
        accent={'edu'}
        title={'EDUCATION'}
        text={liveTxt}
      />
      <Box
        boxWidth={32}
        boxHeight={eduHeight || 'auto'}
        posX={200 - 32}
        posY={32 + notchSize}
        section={'default'}
      />
      <AboutCard
        ref={commRef} // el div sale de tamaño 0x0 y por eso BoxHeight no se calcula bien
        posX={50}
        posY={100}
        accent={'comm'}
        title={'COMMUNITY'}
        text={liveTxt}
      />
      <Box
        boxWidth={32}
        boxHeight={eduHeight || 'auto'}
        posX={50 - 32}
        posY={100 + notchSize}
        section={'default'}
      /> */}
    </section>
  );
}

