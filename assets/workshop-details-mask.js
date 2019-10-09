import React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  G,
  Use
} from 'react-native-svg';

import { lighten } from 'polished';

const SvgComponent = ({ color, ...rest }) => (
  <Svg viewBox="0 0 375 140" preserveAspectRatio="xMidYMid meet" {...rest}>
    <Defs>
      <LinearGradient
        x1="100%"
        y1="43.778%"
        x2="0%"
        y2="56.222%"
        id="prefix__c"
      >
        <Stop
          stopColor={(color && lighten(0.2, color)) || '#c759e0'}
          offset="0%"
        />
        <Stop stopColor={color || '#7159c1'} offset="100%" />
      </LinearGradient>
      <Path
        d="M1.541 110.563c27.386 9.683 62.282 14.923 104.688 15.72 69.777 1.312 81.771-8.25 154.967-8.25 49.016 0 87.626 4.99 115.83 14.967V1.264L0 0l1.541 110.563z"
        id="prefix__a"
      />
    </Defs>
    <G transform="translate(-1.516 -4)" fill="none" fillRule="evenodd">
      <Use fill="#000" filter="url(#prefix__b)" xlinkHref="#prefix__a" />
      <Use fill="url(#prefix__c)" xlinkHref="#prefix__a" />
    </G>
  </Svg>
);

export default SvgComponent;
