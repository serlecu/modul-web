import LeftPanel from '../../LeftPanel/LeftPanel';
import LogoSection from '../../LogoSection/LogoSection';
import styles from './HomeHero.module.css';
import useRectRef from '../../../hooks/useRectRef';

import image from '../../../assets/ph_img.jpg';

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
    const notch = 24; // Notch size for the logo section and left panel
    const [
      titleWidth, titleHeight, titleTop, titleLeft, refTitle,
    ] = useRectRef<HTMLDivElement>(10, 10);
    const [
      leftPanelWidth, leftPanelHeight, leftPanelTop, leftPanelLeft, refLeftPanel,
    ] = useRectRef<HTMLDivElement>(10, 10);

    return (
      <section
        // className={styles.section}
        style={{
          position: 'absolute',
          // border: '1px solid pink',
          top: '50%',
          transform: 'translateY(-50%)',
          width: `${titleWidth + leftPanelWidth}px`,
          height: `${Math.max(titleHeight, leftPanelHeight)}px`,
        }}
      >
        <LogoSection
          ref={refTitle}
          top={0}
          left={0} // Adjusted to center the logo section
          layer={1}
          title="meka"
          section="edu"
          subtitle="Talleres de experimentación Audiovisual"
        />
        <LeftPanel
          ref={refLeftPanel}
          top={50} // Positioned below the logo section
          left={titleWidth - notch * 2} // Adjusted to position the left panel
          height={titleHeight + 400} // Height to match the logo section
          layer={0}
          img={image}
          title="MEKA #1"
          date="00/00/2025"
          time="19:00h"
          place="CCC_Octubre"
          section="edu"
        />
      </section>
    );
}

