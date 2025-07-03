import LeftPanel from '../../LeftPanel/LeftPanel';
import LogoSection from '../../LogoSection/LogoSection';
import styles from './HomeHero.module.css';

export default function HomeHero(
) {
    const zeroX = window.innerWidth / 2;
    const zeroY = window.innerHeight / 2;
    const gap = 32;
    return (
      <section className={styles.section}>
        <LogoSection
          width={540}
          height={180}
          top={0}
          left={0} // Adjusted to center the logo section
          section="edu"
        />
        <LeftPanel
          width={460}
          height={500}
          top={zeroY - 250}
          left={460 / 2 + gap} // Adjusted to position the left panel
        />
      </section>
    );
}

