import React, { useState, useEffect } from 'react';

/*
  Hay un conflicto con usestate y los eventos de scroll.
  Si se usa useState, el scroll no funciona correctamente.
*/

export default function useVirtualScroll(
  lowThresh = 0,
  highThresh = 100,
  // setter: React.Dispatch<React.SetStateAction<number>>
  ): [number, React.Dispatch<React.SetStateAction<number>>] {
  // --- Virtual Scroll Area ---
  let counter = 0;
  let isDragging = false;
  let startY = 0;

  const [vScrollPos, setVScrollPos] = useState(() => 0);

  useEffect(() => {
    initializeVirtualScroll();
  });


  function initializeVirtualScroll() {
    // --- Desktop: Wheel Event ---
    document.addEventListener('wheel', (event) => {
      event.preventDefault();
      counter += Math.sign(event.deltaY);
      if (counter < lowThresh) {
        counter = lowThresh;
      } else if (counter > highThresh) {
        counter = highThresh;
      }
      // setVScrollPos(counter);
      // updateCounter(counter);
    }, { passive: false });

    document.addEventListener('touchstart', (event) => {
      isDragging = true;
      startY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', (event) => {
      if (isDragging) {
        event.preventDefault();
        const deltaY = startY - event.touches[0].clientY; // Vertical drag distance
        counter += Math.sign(deltaY);
        if (counter < lowThresh) {
          counter = lowThresh;
        } else if (counter > highThresh) {
          counter = highThresh;
        }
        startY = event.touches[0].clientY;
      }
    });

    document.addEventListener('touchend', () => {
      isDragging = false;
    });
  }

  function updateCounter(newCounter) {
    // Aquí puedes actualizar el estado o hacer algo con el nuevo valor de counter
    // setter(newCounter);
    // setVScrollPos(newCounter);
    console.log('Counter updated:', newCounter);
  }

  return [vScrollPos, setVScrollPos] as const;
}