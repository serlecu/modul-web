import styles from './HomeUs.module.css';
import Box from '../../Box/Box';

export default function HomeUs(

) {
    return(
        <div>
            <Box
                boxWidth={200}
                boxHeight={200}
                strokeWidth={2}
                notchSize={32}
                content={<p>About Us</p>}
                layer={0}
                />
        </div>
    );
}

