import logo from '@/assets/logo.png';
import styles from './index.module.css';
import { useState } from 'react';
import useVirtualScroll from '../hooks/useVirtualScroll';
import Box from '../components/Box/Box';
import HomeHero from '../components/agrupados/HomeHero/HomeHero';
import HomeEventos from '../components/agrupados/HomeEventos/HomeEventos';
import HomeUs from '../components/agrupados/HomeUs/HomeUs';
import HomeContacto from '../components/agrupados/HomeContacto/HomeContacto';

export default function IndexPage() {
  const c1 = <p style={{ zIndex: '10' }}>HOLA</p>;
  const c2 = <img src={logo} alt="logo" />;


  const [vScrollPos, setVScrollPos] = useVirtualScroll(0, 200);

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <Box boxWidth={200} boxHeight={32} content={<p>{vScrollPos}</p>}/>
        </nav>
      </header>
      <main>
        { vScrollPos >= 0 && vScrollPos <= 49 &&
            <HomeHero/>
        }
        { vScrollPos >= 50 && vScrollPos <= 99 &&
          <section id="section2">
            <HomeContacto/>
          </section>
        }
        { vScrollPos >= 100 && vScrollPos <= 149 &&
          <section id="section3">
            <HomeEventos/>
          </section>
        }
        { vScrollPos >= 150 && vScrollPos <= 200 &&
          <section id="section4">
            <HomeUs/>
          </section>
        }
      </main>
    </div>
  );
}
