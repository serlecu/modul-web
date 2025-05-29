import logo from '@/assets/logo.png';
import styles from './testScroll.module.css';
import Box from '../components/Box/Box';

export default function IndexPage() {
  const c1 = <p style={{ zIndex: '10' }}>1</p>;
  const c2 = <p style={{ zIndex: '10' }}>2</p>;
  const c3 = <p style={{ zIndex: '10' }}>3</p>;

  // --- Virtual Scroll Area ---
  let counter = 0;
  let isDragging = false;
  let startY = 0;

  // --- Desktop: Wheel Event ---
  document.addEventListener('wheel', (e) => {
    e.preventDefault();
    counter += Math.sign(e.deltaY);
    updateCounter();
  });

  // --- Mobile: Touch Events ---
  document.addEventListener('touchstart', (e) => {
    isDragging = true;
    startY = e.touches[0].clientY;
    console.log('Touch start at:', startY);
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaY = startY - e.touches[0].clientY; // Vertical drag distance
    counter += Math.sign(deltaY);
    startY = e.touches[0].clientY;
    updateCounter();
  });

  document.addEventListener('touchend', () => {
    isDragging = false;
    console.log('Touch end');
  });

  function updateCounter() {
    console.log('Counter:', counter);
  }

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <Box boxWidth={200} boxHeight={32} />
        </nav>
      </header>
      <main>
        <section id="section1">
          <Box
            boxWidth={200}
            boxHeight={200}
            strokeWidth={2}
            notchSize={32}
            displace={false}
            content={c1}
          />
        </section>
        <section id="section2">
          <Box
            boxWidth={200}
            boxHeight={200}
            strokeWidth={2}
            notchSize={32}
            content={c2}
            layer={0}
          />
        </section>
        <section id="section3">
          <Box
            boxWidth={200}
            boxHeight={200}
            strokeWidth={2}
            notchSize={32}
            content={c3}
            layer={0}
          />
        </section>
      </main>
    </div>
  );
}
