import { useState, useLayoutEffect, useRef, RefObject } from 'react';

export default function useRectRef<T extends HTMLElement>(
  initWidth: number,
  initHeight: number,
): [number, number, number, number, RefObject<T>] {
  const ref = useRef<T>(null);
  const [rect, setRect] = useState([initWidth, initHeight, 0, 0]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const updateRect = () => {
      const { width, height, top, left } = ref.current!.getBoundingClientRect();
      setRect(prev => {
        return prev[0] === width && prev[1] === height && prev[2] === top && prev[3] === left
          ? prev
          : [width, height, top, left];
      });
    };
    updateRect();
    const resizeObserver = new ResizeObserver(updateRect);
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, []);

  return [rect[0], rect[1], rect[2], rect[3], ref];
}