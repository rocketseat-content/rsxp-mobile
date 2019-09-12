import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Path, Use } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = props => (
  <Svg width={375} height={129} {...props}>
    <Defs>
      <LinearGradient
        x1="17.383%"
        y1="45.869%"
        x2="99.976%"
        y2="55.802%"
        id="prefix__b"
      >
        <Stop stopColor="#7159C1" offset="0%" />
        <Stop stopColor="#C759E0" offset="99.987%" />
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
