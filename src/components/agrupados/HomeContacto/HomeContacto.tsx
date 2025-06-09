import styles from './HomeContacto.module.css';
import Box from '../../Box/Box';

export default function HomeContacto(

) {
    return(
        <div>
            <Box
                boxWidth={200}
                boxHeight={200}
                strokeWidth={2}
                notchSize={32}
                content={<p>Contacto</p>}
                layer={0}
                />
        </div>
    );
}