import styles from './box.module.css';

interface BoxProps {
  boxWidth: number;
  boxHeight: number;
  strokeWidth?: number;
  notchSize?: number;
}

export default function Box({
  boxWidth,
  boxHeight,
  strokeWidth = 2,
  notchSize = 16,
}: BoxProps) {

  const points1 = `
    ${Math.round(strokeWidth*0.5)},${0 + notchSize} 
    ${0 + notchSize},${Math.round(strokeWidth*0.5)}
    ${boxWidth - Math.round(strokeWidth*0.5)},${Math.round(strokeWidth*0.5)}
    ${boxWidth - Math.round(strokeWidth*0.5)} ,${boxHeight - notchSize} 
    ${boxWidth - notchSize},${boxHeight - Math.round(strokeWidth*0.5)} 
    ${Math.round(strokeWidth*0.5)},${boxHeight - Math.round(strokeWidth*0.5)} 
    ${Math.round(strokeWidth*0.5)},${0 + notchSize} 
  `;

  return (
    <div className={styles.notched} style={{ width: boxWidth, height: boxHeight }}>
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={`0 0 ${boxWidth} ${boxHeight}`}
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
