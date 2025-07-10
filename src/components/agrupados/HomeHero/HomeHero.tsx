import LeftPanel from '../../LeftPanel/LeftPanel';
import LogoSection from '../../LogoSection/LogoSection';
import styles from './HomeHero.module.css';

/**
 * HomeHero component that displays the main topmost section of the home page.
 * It includes a logoSection and a leftPanel components as card element for
 * showcasing the next or an important event.
 *
 * It has no props for now as it will render in the cented of the page,
 * but will get props in the future to recieve the data it needs to display
 * (an object with the event displayed).
*/
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
          title="meka"
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

