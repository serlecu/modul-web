import styles from './box.module.css';

interface BoxProps {
  boxWidth: number;
  boxHeight: number;
  strokeWidth?: number;
  notchSize?: number;
  displace?: boolean;
}

export default function Box({
  boxWidth,
  boxHeight,
  strokeWidth = 2,
  notchSize = 16,
  displace = false,
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
    <div className={styles.notched} style={{ width: boxWidth, height: boxHeight }}>
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={
          `${displace? 0-(notchSize-strokeWidth) : '0'} 
          0 
          ${displace? boxWidth-(notchSize-strokeWidth) : boxWidth} 
          ${boxHeight}`}
      >
        <polygon
          points={points1}
          fill='#FFFFFF'
          stroke='#000000'
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  );
}
