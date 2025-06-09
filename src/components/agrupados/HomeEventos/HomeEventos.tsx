import styles from './HomeEventos.module.css';
import Box from '../../Box/Box';

export default function HomeEventos(

) {
    return(
        <div>
            <Box // LOGO_M
                boxWidth={200}
                boxHeight={350}
                strokeWidth={2}
                notchSize={32}
                content={<p>M</p>}
                layer={0}
                />
            <Box // LOGO_MEKA
                boxWidth={700}
                boxHeight={350}
                strokeWidth={2}
                notchSize={32}
                content={<p>meka</p>}
                layer={0}
                />
            <Box
                boxWidth={200}
                boxHeight={200}
                strokeWidth={2}
                notchSize={32}
                layer={0}
                />
            <Box
                boxWidth={200}
                boxHeight={200}
                strokeWidth={2}
                notchSize={32}
                content={<p>Eventos</p>}
                layer={0}
                />
        </div>
    );
}