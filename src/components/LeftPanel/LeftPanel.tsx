import { useState, useEffect, useRef } from 'react';
import Box from '../Box/Box';
import styles from './LeftPanel.module.css';
import image from '../../assets/m.svg';

export default function LeftPanel({
  width = 460,
  height = 94,
  top = 0,
  left = 0,
}: {
  width: number;
  height: number;
  top: number;
  left: number;
}) {
  const notchSize = 16;
  const bgWidth = 94;

  const mainBoxRef = useRef<HTMLDivElement>(null);
  const [mainBoxHeight, setMainBoxHeight] = useState<number>(notchSize * 4);

  useEffect(() => {
    if (mainBoxRef.current) {
      const updateHeight = () => {
        const height = mainBoxRef.current!.getBoundingClientRect().height || notchSize * 4;
        setMainBoxHeight(height);
      };
      // Set the initial height
      updateHeight();
      // Create a ResizeObserver to update the height on resize
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(mainBoxRef.current!);
      return () => {
        resizeObserver.disconnect();
      };
    } else {
    console.log('mainBoxRef is null'); // Debugging log
    }
  }, []);

  return (
    <div
      className={styles.leftPanel}
      style={{
        top: top,
        left: left,
      }}
    >
      <Box
        key={mainBoxHeight}
        boxWidth={bgWidth}
        boxHeight={mainBoxHeight + notchSize}
        strokeWidth={2}
        layer={0}
        content={<></>}
        posX={notchSize}
        posY={0}
        section="bg"
      />
      <Box
        ref={mainBoxRef}
        boxWidth="auto" // {width - bgWidth}
        boxHeight="auto" // {boxHeight - notchSize}
        strokeWidth={2}
        layer={0}
        posX={notchSize + bgWidth}
        posY={-notchSize - mainBoxHeight}
        section="edu"
        content={
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <img src={image} alt="MEKA Logo" />
            </div>
            <h1>MEKA #1</h1>
            <div className={styles.eventInfo}>
              <p className={styles.info}>00/00/2025</p>
              <p className={styles.info}>19:00h</p>
              <p className={styles.info}>CCC_Octubre</p>
            </div>
          </div>
        }
      />
    </div>
  );
}