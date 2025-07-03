import Box from '../../Box/Box';
import styles from './HomeContacto.module.css';
import contactImg from '../../../assets/home_contact.png';
import logoLong from '../../../assets/logo_long.png';

export default function HomeContacto(

) {
    return (
      <section id="home-contacto" className={styles.contacto}>
        <div className={styles.mokeContainer}>
          <img
            src={logoLong}
            className="moke"
            style={{ width: '280px', height: 'auto', zIndex: 2 }}
          />
          <img
            src={contactImg}
            className="moke"
            style={{ width: '460px', height: 'auto', zIndex: 1 }}
          />
        </div>
      </section>
    );
}