import logo from '@/assets/logo.png';
import styles from './index.module.css';
import Box from '@/components/Box/box';

export default function IndexPage() {
  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <Box boxWidth={96} boxHeight={24} />
        </nav>
      </header>
      <main>
        <p>
          Hello
        </p>
      </main>
    </div>
  );
}
