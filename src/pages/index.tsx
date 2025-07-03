import styles from './index.module.css';
import Nav from '../components/Nav/Nav';
import HomeHero from '../components/agrupados/HomeHero/HomeHero';
// import HomeEventos from '../components/agrupados/HomeEventos/HomeEventos';
import HomeUs from '../components/agrupados/HomeUs/HomeUs';
import HomeContacto from '../components/agrupados/HomeContacto/HomeContacto';

import useVirtualScroll from '../hooks/useVirtualScroll';

export default function IndexPage() {
  const [vScrollPos, setVScrollPos] = useVirtualScroll(0, 39);

  return (
    <div className={styles.app}>
      <Nav posX={32} posY={32} scrollSetter={setVScrollPos} />
      <main>
        { vScrollPos >= 0 && vScrollPos <= 9 &&
          <HomeHero /> }
        { vScrollPos >= 10 && vScrollPos <= 19 &&
          <HomeUs /> }
        {/* { vScrollPos >= 20 && vScrollPos <= 29 &&
          <HomeEventos />} */}
        { vScrollPos >= 30 && vScrollPos <= 39 &&
          <HomeContacto />}
      </main>
    </div>
  );
}
