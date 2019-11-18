import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Use } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg viewBox="0 0 375 129" preserveAspectRatio="xMidYMid meet" {...props}>
    <Defs>
      <LinearGradient
        x1="0%"
        y1="100%"
        x2="100%"
        y2="0%"
        id="prefix__b"
      >
        <Stop stopColor="#7A59C4" offset="30%" />
        <Stop stopColor="#00DBFF" offset="100%" />
      </LinearGradient>
      <Path
        d="M1.541 110.563c27.386 9.683 62.282 14.923 104.688 15.72 69.777 1.312 81.771-8.25 154.967-8.25 49.016 0 87.626 4.99 115.83 14.967V1.264L0 0l1.541 110.563z"
        id="prefix__a"
      />
    </Defs>
    <Use
      fill="url(#prefix__b)"
      xlinkHref="#prefix__a"
      transform="translate(-1.516 -4)"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;
