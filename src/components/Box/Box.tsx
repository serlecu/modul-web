import styles from './box.module.css';

export default function Box(boxWidth: number, boxHeight: number) {
  return (
    <div className={styles.notched} style={{ width: boxWidth, height: boxHeight }}>
      <></>
    </div>
  );
}
