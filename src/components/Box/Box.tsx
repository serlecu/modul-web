import styles from './Box.module.css';

interface BoxProps {
  boxWidth: number;
  boxHeight: number;
  boxClass?: string;
  strokeWidth?: number;
  notchSize?: number;
  displace?: boolean;
  content?: JSX.Element;
  layer?: number;
  posX?: number;
  posY?: number;
}

export default function Box({
  boxWidth,
  boxHeight,
  boxClass,
  strokeWidth = 1,
  notchSize = 16,
  displace = false,
  content,
  layer = 0,
  posX,
  posY,
}: BoxProps) {

  const points1 = [
    [0, notchSize],
    [notchSize, 0],
    [boxWidth, 0],
    [boxWidth, boxHeight-notchSize],
    [boxWidth-notchSize, boxHeight],
    [0, boxHeight],
    [0, 0 + notchSize]
  ].map(p => p.join(',')).join(' ');

  const polyClass = boxClass ? styles[boxClass] : '';
  
  return (
    <div 
      className={styles.notchedBox}
      style={{
          width: boxWidth - notchSize,
          height: boxHeight - notchSize,
          zIndex: layer + 1,
          top: posY,
          left: posX
      }}
    >
      <svg
        width={boxWidth}
        height={boxHeight}
        viewBox={`${Math.round(notchSize * 0.5)} ${-Math.round(notchSize * 0.5)} ${boxWidth} ${boxHeight}`}
      >
        <polygon
          className={polyClass || styles.polyDefault}
          points={points1}
          strokeWidth={strokeWidth}
        />
      
      </svg>
      {content}
    </div>
  );
}
