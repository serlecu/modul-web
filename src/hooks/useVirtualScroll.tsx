import React, { useState, useEffect, useRef, useCallback } from 'react';

/*
  Hay un conflicto con usestate y los eventos de scroll.
  Si se usa useState, el scroll no funciona correctamente.
*/

export default function useVirtualScroll(
  lowThresh = 0,
  highThresh = 100,
  ): [number, React.Dispatch<React.SetStateAction<number>>] {

  const [vScrollPos, setVScrollPos] = useState(() => 0);
  const isDragging = useRef<boolean>(false);
  const startY = useRef<number>(0);

  function updateCounter(counter: number, deltaY: number) {
    if(counter <= lowThresh) {
      return lowThresh+1;
    } else if (counter >= highThresh) {
      return highThresh-1;
    } else {
      return counter + deltaY
    }
  }

  const handleWheel = useCallback((event: WheelEvent) => {
      event.preventDefault();
      setVScrollPos(prev => {
        return updateCounter(prev, Math.sign(event.deltaY));
      });
  }, [lowThresh, highThresh]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    isDragging.current = true;
    startY.current = event.touches[0].clientY;
  }, []);
  
  const handleTouchMove = useCallback((event: TouchEvent) => {
    event.preventDefault();
    if (isDragging.current) {
      const deltaY = startY.current - event.touches[0].clientY; // Vertical drag distance
      startY.current = event.touches[0].clientY;
      setVScrollPos(prev => {
        return updateCounter(prev, Math.sign(deltaY));
      });
    }
  }, [lowThresh, highThresh]);
  
  const handleTouchEnd = useCallback( () => {
      isDragging.current = false;
  }, []);

  useEffect(() => {
    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [
    handleWheel,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd
  ]);

  return [vScrollPos, setVScrollPos] as const;
}