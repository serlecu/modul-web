import React, { useRef, forwardRef, useMemo } from 'react';
import Box from '../../Box/Box';
import styles from './BoxM.module.css';
import mDef from '../../../assets/m_def.svg';
import mFill from '../../../assets/m_fill.svg';
// import mDefFill from '../../../assets/m_def_f.svg';
import mEdu from '../../../assets/m_edu.svg';
// import mEduFill from '../../../assets/m_edu_f.svg';
import mLive from '../../../assets/m_live.svg';
// import mLiveFill from '../../../assets/m_live_f.svg';
import mComm from '../../../assets/m_comm.svg';
// import mCommFill from '../../../assets/m_comm_f.svg';

interface BoxMProps {
  posX?: number;
  posY?: number;
  logoSize: number;
  notchSize?: number;
  layer?: number;
  isFill?: boolean;
  smallNotch?: boolean;
  section?: 'default' | 'live' | 'edu' | 'comm';
}

function BoxM(
  {
    posX,
    posY,
    logoSize = 46,
    notchSize = 8,
    layer = 0,
    isFill = false,
    section = 'default',
   }: BoxMProps,
   ref: React.Ref<HTMLDivElement>,
) {
  const padTop = logoSize * 0.48;
  const padRight = logoSize * 0.13;
  const padBot = logoSize * 0.48;
  const padLeft = logoSize * 0.435;
  const padding = `${padTop}px ${padRight}px ${padBot}px ${padLeft}px`;
  let imgVer: string = mFill;

  if (!isFill) {
    switch (section) {
      case 'live':
        imgVer = mLive;
        break;
      case 'edu':
        imgVer = mEdu;
        break;
      case 'comm':
        imgVer = mComm;
        break;
      default:
        imgVer = mDef;
    }
  }

  const content = useMemo(() => {
    return (
      <img
        src={imgVer}
        alt="Logo M"
        width={`${logoSize}px`}
        height={`${logoSize}px`}
        style={{
          padding: padding,
        }}
      />
    );
  }, [imgVer, logoSize, padding]);

  return (
    <Box
      ref={ref}
      boxWidth={'auto'}
      boxHeight={'auto'}
      strokeWidth={1}
      notchSize={notchSize}
      content={content}
      layer={layer}
      posX={posX}
      posY={posY}
      isFill={isFill}
      section={section}
    />
  );
}

export default forwardRef<HTMLDivElement, BoxMProps>(BoxM);