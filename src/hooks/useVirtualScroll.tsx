import { useEffect } from 'react';

export default function useVirtualScroll() {
  // --- Virtual Scroll Area ---
  let counter = 0;
  let isDragging = false;
  let startY = 0;

  useEffect(() => {
    initializeVirtualScroll();
  });


  function initializeVirtualScroll() {
    // --- Desktop: Wheel Event ---
    document.addEventListener('wheel', (event) => {
      event.preventDefault();
      counter += Math.sign(event.deltaY);
      updateCounter();
    }, { passive: false });

    // --- Mobile: Touch Events ---
    document.addEventListener('touchstart', (event) => {
      isDragging = true;
      startY = event.touches[0].clientY;
      console.log('Touch start at:', startY);
    });

    document.addEventListener('touchmove', (event) => {
      if (!isDragging) return;
      event.preventDefault();
      const deltaY = startY - event.touches[0].clientY; // Vertical drag distance
      counter += Math.sign(deltaY);
      startY = event.touches[0].clientY;
      updateCounter();
    });

    document.addEventListener('touchend', () => {
      isDragging = false;
      console.log('Touch end');
    });
  }

  function updateCounter() {
    console.log('Counter:', counter);
  }
}