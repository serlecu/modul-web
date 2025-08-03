import { forwardRef } from 'react';
import Box from '../../Box/Box';
import useRectRef from '../../../hooks/useRectRef';
import { info } from 'console';

// implementar este enum en vez de clases CSS
const sectionColor: Record<string, string> = {
  default: '#FFFFFF',
  live: '#EF3B39',
  edu: '#23B0E6',
  comm: '#F6C514',
  bg: '#555555',
};

interface EventCoverCardProps {
  top?: number;
  left?: number;
  layer?: number;
  section?: 'default' | 'live' | 'edu' | 'comm';
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export default forwardRef<HTMLDivElement, EventCoverCardProps>(EventCoverCard);
function EventCoverCard({
  top = 0,
  left = 0,
  layer = 0,
  section = 'default',
  title,
  date,
  time,
  location,
  image,
}: EventCoverCardProps,
  ref?: React.Ref<HTMLDivElement>,
) {
  const notch = 24;
  const color = sectionColor[section];
  const [
    cardWidth, cardHeight, cardTop, cardLeft, refCard,
  ] = useRectRef<HTMLDivElement>(100, 100);
  const [
    contentWidth, contentHeight, contentTop, contentLeft, refContent,
  ] = useRectRef<HTMLDivElement>(100, 100);
  const [
    infoWidth, infoHeight, infoTop, infoLeft, refInfo,
  ] = useRectRef<HTMLDivElement>(100, 100);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        zIndex: layer,
        top: `${top}%`,
        left: `${left}px`,
        transform: `translateY(-${top}%)`,
        width: `${cardWidth + notch}px`,
        height: `${cardHeight + notch}px`,
        // border: '1px solid yellow',
      }}
    >
      <Box
        ref={refCard}
        boxWidth={contentWidth + notch * 2}
        boxHeight={contentHeight + notch * 2}
        layer={0}
        posX={notch}
        posY={0}
        section={section}
        content={
          <div
            ref={refContent}
            style={{
              position: 'absolute',
              top: `${0}%`,
              left: `${0}px`,
              transform: `translateY(-${top}%)`,
              width: `${infoWidth + notch * 2}px`,
              height: `${infoHeight + infoHeight * (3 / 4) + notch * 2}px`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              border: `1px solid ${color}`,
            }}
          >
            <img
              src={image}
              alt={title}
              style={{
                position: 'relative',
                top: `${0}%`,
                left: `${0}px`,
                transform: `translateY(-${top}%)`,
                width: `${infoWidth}px`,
                aspectRatio: '3/4',
                objectFit: 'cover',
                // border: `1px solid ${color}`,
              }}
            />
            <EventCoverInfo
              ref={refInfo}
              title={title}
              date={date}
              time={time}
              location={location}
              color={color}
            />
          </div>
        }
      />
    </div>
  );
}

interface EventCoverInfoProps {
  title: string;
  date: string;
  time: string;
  location: string;
  color: string;
}
const EventCoverInfo = forwardRef<HTMLDivElement, EventCoverInfoProps>(
  ({ title, date, time, location, color }, ref) => {
    const [
      titleWidth, titleHeight, titleTop, titleLeft, refTitle,
    ] = useRectRef<HTMLHeadingElement>(100, 100);
    const [
      infoWidth, infoHeight, infoTop, infoLeft, refInfo,
    ] = useRectRef<HTMLDivElement>(100, 100);

    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          color: color,
          width: `${infoWidth}px`,
          height: `${infoHeight + titleHeight}px`,
          // border: '1px solid pink',
          fontFamily: 'var(--font-display)',
        }}
      >
        <h2 ref={refTitle}>{title}</h2>
        <div
          ref={refInfo}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '16px',
            border: `1px solid ${color}`,
          }}
        >
          <p style={{ color: `${color}` }}>{date}</p>
          <p style={{ color: `${color}` }}>{time}</p>
          <p style={{ color: `${color}` }}>{location}</p>
        </div>
      </div>
    );
  },
);

