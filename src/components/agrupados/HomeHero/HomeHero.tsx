import styles from './HomeHero.module.css';
import Box from '../../Box/Box';

export default function HomeHero(

) {
    return(
        <section className={styles.section}>
            <Box // LOGO_M
                boxClass={"logoM"}
                boxWidth={180}
                boxHeight={220}
                strokeWidth={2}
                notchSize={32}
                content={<p>M</p>}
                layer={1}
                posX={-300}
                posY={100}
                />
            <Box // LOGO_Meka
                boxClass={"logoName"}
                boxWidth={460}
                boxHeight={220}
                strokeWidth={2}
                notchSize={32}
                content={<p>meka</p>}
                layer={1}
                posX={-120}
                posY={68}
                />
            <Box // bg1
                boxClass={"bgBox"}
                boxWidth={460}
                boxHeight={94}
                strokeWidth={2}
                notchSize={32}
                layer={0}
                content={<></>}
                posX={-152}
                posY={288}
                />
            <Box // title
                boxClass={""}
                boxWidth={460}
                boxHeight={94}
                strokeWidth={2}
                notchSize={32}
                content={<p>M</p>}
                layer={0}
                posX={-120}
                posY={332}
                />
        </section>
    );
}

