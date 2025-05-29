import logo from '@/assets/logo.png';
import styles from './testScroll.module.css';
import Box from '../components/Box/Box';
import useVirtualScroll from '../hooks/useVirtualScroll';

export default function IndexPage() {
  const c1 = <p style={{ zIndex: '10' }}>1</p>;
  const c2 = <p style={{ zIndex: '10' }}>2</p>;
  const c3 = <p style={{ zIndex: '10' }}>3</p>;

  useVirtualScroll(0, 200);

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
