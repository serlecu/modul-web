import React, { useRef, useEffect, useState, forwardRef, useLayoutEffect } from 'react';
import styles from './Box.module.css';

// implementar este enum en vez de clases CSS
// const sectionColor: Record<string, string> = {
//   default: 'white',
//   live: 'blue',
//   edu: 'green',
//   comm: 'orange',
//   bg: 'gray',
// };
// const color = sectionColor[section];

interface BoxProps {
  boxWidth: number | 'auto';
  boxHeight: number | 'auto';
  strokeWidth?: number;
  notchSize?: number;
  content?: JSX.Element;
  layer?: number;
  posX?: number;
  posY?: number;
  isFill?: boolean;
  section: 'default' | 'live' | 'edu' | 'comm' | 'bg';
}

/**
 * Reusable Box component with customizable dimensions, styles, and content.
 * This will be the basis for all boxes in the application.
 *
 * @param boxWidth - The width of the box (number or 'auto'). When set to auto,
 * the width will be calculated based on the content.
 * @param boxHeight - The height of the box (number or 'auto'). Same as boxWidth.
 * @param strokeWidth - The width of the stroke for the SVG polygon. Modify it's
 * default value to change the stroke width for all boxes, and use it as prop only
 * for exceptions. It should work as a final static class value.
 * @param notchSize - The size of the notches in the box corners. Same use cases
 * as for strokeWidth.
 * @param content - The JSX content to render inside the box. Same rules as any
 * return for a React component. We should try not to use complex components inside.
 * @param layer - The z-index layer of the box. That will be used to virtualy stack
 * the boxes in the application. The higher the number, the higher the layer.
 * @param posX - The x-coordinate position of the box. It depends on the parent
 * component, so it should be set by the parent component. It will be used to
 * position the box absolutely within its parent container.
 * @param posY - The y-coordinate position of the box. Same as posX but for the y-axis.
 * @param isFill - Whether the box is filled or outlined. If true, the box will be filled
 * with color; if false, it will be outlined. This will be used to apply different styles
 * to the box based on its state. Depends on css clases.
 * @param section - The section type for styling (e.g., 'default', 'live', etc.). As "isFill",
 * it depends on css clases. All options are explicitly defined in the BoxProps interface.
 */
function Box(
  {
    boxWidth,
    boxHeight,
    strokeWidth = 1,
    notchSize = 32,
    content,
    layer = 0,
    posX,
    posY,
    isFill = false,
    section = 'default',
   }: BoxProps,
   ref: React.Ref<HTMLDivElement>,
) {
  const contentRef = useRef<HTMLDivElement>(null); // For observing the content size
  const [calculatedWidth, setCalculatedWidth] = useState<number | 'auto'>(boxWidth);
  const [calculatedHeight, setCalculatedHeight] = useState<number | 'auto'>(boxHeight);

  // Calculate width and height of box based on setting (auto or not)
  // If section is 'bg', always use boxWidth and boxHeight directly
  const numericWidth = section === 'bg'
    ? (typeof boxWidth === 'number' ? boxWidth : notchSize * 4)
    : (calculatedWidth === 'auto' ? notchSize * 4 : calculatedWidth);
  const numericHeight = section === 'bg'
    ? (typeof boxHeight === 'number' ? boxHeight : notchSize * 4)
    : (calculatedHeight === 'auto' ? notchSize * 4 : calculatedHeight);

  // Effect to calculate dimensions based on content size, except for section 'bg'
  useLayoutEffect(() => {
    if (section === 'bg') return; // Do not measure content for 'bg' section
    if (contentRef.current) {
      const updateSize = () => {
        const { offsetWidth, offsetHeight } = contentRef.current!; // Get the size of the content
        if (boxWidth === 'auto' && calculatedWidth !== offsetWidth + notchSize) {
          setCalculatedWidth(offsetWidth + notchSize); // Update Width state
        }
        if (boxHeight === 'auto' && calculatedHeight !== offsetHeight + notchSize) {
          setCalculatedHeight(offsetHeight + notchSize); // Update height state
        }
      };
      updateSize(); // Initial size update
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [boxWidth, boxHeight, notchSize, calculatedWidth, calculatedHeight, section]);


  // Points for the poligon shape (notched box)
  const points1 = [
    [0, notchSize],
    [notchSize, 0],
    [numericWidth, 0],
    [numericWidth, numericHeight - notchSize],
    [numericWidth - notchSize, numericHeight],
    [0, numericHeight],
    [0, 0 + notchSize],
  ]
    .map((p) => p.join(',')) // Converting the points to a string prevents some bugs
    .join(' ');

  // Set the class for the polygon based on section and isFill
  const polyClass = styles[`poly-${isFill ? 'fill' : 'stroke'}-${section}`] || '';

  return (
    <div
      ref={ref}
      className={styles.notchedBox}
      style={{
        width: numericWidth ? numericWidth - notchSize : 'auto',
        height: numericHeight ? numericHeight - notchSize : 'auto',
        zIndex: layer + 1,
        top: posY,
        left: posX,
      }}
    >
      <svg
        width={numericWidth}
        height={numericHeight}
        viewBox={`${Math.round(notchSize * 0.5)} ${-Math.round(notchSize * 0.5)} ${numericWidth} ${numericHeight}`}
      >
        <polygon
          className={polyClass}
          points={points1}
          fill="#000000"
          stroke="#FFFFFFFF"
          strokeWidth={strokeWidth}
        />
      </svg>
      <div ref={contentRef} className={styles.boxContent}>
        {content}
      </div>
    </div>
  );
}

export default forwardRef<HTMLDivElement, BoxProps>(Box);