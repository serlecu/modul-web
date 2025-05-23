import logo from '@/assets/logo.png';
import styles from './index.module.css';
import Box from "../components/Box/Box";

export default function IndexPage() {

  const c1 = <p style={{zIndex:'10'}}>HOLA</p>;
  const c2 = <img src={logo} alt="logo" />;

  return (
    <div className={styles.app}>
      <header>
        <img src={logo} alt="logo" />
        <nav>
          <Box boxWidth={200} boxHeight={32}/>
        </nav>
      </header>
      <main>
        <Box 
          boxWidth={200} 
          boxHeight={200}
          strokeWidth={10}
          notchSize={32}
          displace={false}
          content={c1}
          />
        <Box 
          boxWidth={200} 
          boxHeight={200}
          strokeWidth={10}
          notchSize={32}
          content={c2}
          layer={0}
          />
        <Box 
          boxWidth={300} 
          boxHeight={200}
          strokeWidth={10}
          notchSize={32}
          displace={false}
          />
      </main>
    </div>
  );
}
