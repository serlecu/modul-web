import { forwardRef } from 'react';
import Box from '../Box/Box';
import EventCoverCard from '../pure/EventCoverCard/EventCoverCard';
import styles from './LeftPanel.module.css';
import useRectRef from '../../hooks/useRectRef';

const sectionColor: Record<string, string> = {
  default: '#FFFFFF',
  live: '#EF3B39',
  edu: '#23B0E6',
  comm: '#F6C514',
  bg: '#555555',
};

interface PanelProps {
  top: number;
  left: number;
  height?: number | 'auto';
  layer?: number;
  img?: string;
  title?: string;
  date?: string;
  time?: string;
  place?: string;
  section?: 'default' | 'live' | 'edu' | 'comm';
}

function LeftPanel({
  // width = 460,
  // height = 94,
  top = 0,
  left = 0,
  height = 'auto',
  layer = 0,
  img = '',
  title = '',
  date = '',
  time = '',
  place = '',
  section = 'default',
}: PanelProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  const notch = 24;
  const bgWidth = notch * 4;

  const [
    bgBoxWidth, bgBoxHeight, bgBoxTop, bgBoxLeft, refBgBox,
  ] = useRectRef<HTMLDivElement>(bgWidth, 100);
  const [
    cardWidth, cardHeight, cardTop, cardLeft, refCard,
  ] = useRectRef<HTMLDivElement>(100, 100);

  return (
    <div
      ref={ref}
      // className={styles.leftPanel}
      style={{
        position: 'absolute',
        zIndex: layer,
        top: `${top}%`,
        left: `${left}px`,
        transform: `translateY(-${top}%)`,
        width: `${cardWidth + bgBoxWidth + notch * 2}px`,
        height: `${cardHeight + notch * 2}px`,
        // border: '1px solid green',
      }}
    >
      <Box
        ref={refBgBox}
        boxWidth={bgWidth}
        boxHeight={cardHeight + notch}
        layer={0}
        posX={notch}
        posY={notch}
        section="bg"
      />
      {/* <EventCoverCard
        ref={refCard}
        top={0}
        left={bgWidth}
        layer={1}
        section="edu"
        title={title}
        date={date}
        time={time}
        location={place}
        image={img}
      /> */}
      <Box
        ref={refCard}
        boxWidth="auto"
        boxHeight={height}
        layer={1}
        posX={notch + bgWidth}
        posY={0}
        section="edu"
        content={
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              {img && <img src={img} alt="event highlight photo" />}
            </div>
            <h1
              style={{
                color: `${sectionColor[section]}`,
              }}
            >{title}</h1>
            <div className={styles.eventInfo}>
              <p className={styles.info}>{date}</p>
              <p className={styles.info}>{time}</p>
              <p className={styles.info}>{place}</p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default forwardRef<HTMLDivElement, PanelProps>(LeftPanel);