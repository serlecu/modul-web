import styles from './box.module.css';

interface BoxProps {
  boxWidth: number;
  boxHeight: number;
  strokeWidth?: number;
  notchSize?: number;
  displace?: boolean;
  content?: JSX.Element | undefined;
  layer?: number;
}

export default function Box({
  boxWidth,
  boxHeight,
  strokeWidth = 2,
  notchSize = 16,
  displace = false,
  content = undefined,
  layer = 0,
}: BoxProps) {

  const points1 = `
    0, ${notchSize} 
    ${notchSize}, 0
    ${boxWidth}, 0
    ${boxWidth} ,${boxHeight - notchSize} 
    ${boxWidth - notchSize},${boxHeight} 
    0 ,${boxHeight} 
    0, ${0 + notchSize} 
  `;

  return (
    <div className={styles.notchedBox} style={{ width: (boxWidth-notchSize), height: boxHeight-notchSize, zIndex: layer+1}}>
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={
          `
          ${0 + Math.round(notchSize * 0.5 )},
          ${0 - Math.round(notchSize * 0.5)},
          ${boxWidth},
          ${boxHeight}
          `
        }
      >
        <polygon
          points={points1}
          fill='#FFFFFFFF'
          stroke='#000000'
          strokeWidth={strokeWidth}
        />
      </svg>
      {content}
    </div>
  );
}
