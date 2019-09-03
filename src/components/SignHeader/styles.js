import styled from 'styled-components/native';
import { Animated } from 'react-native';

import mask from '../../../assets/mask.png';
import logo from '../../../assets/logo.png';
import rocket from '../../../assets/rocket.png';

export const Container = styled.View`
  flex: 1;
  padding-bottom: 30;
`;

export const Mask = styled(Animated.Image).attrs({
  source: mask
})`
  width: 100%;
`;

export const Logo = styled(Animated.Image).attrs({
  source: logo
})`
  position: absolute;
`;

export const Rocket = styled(Animated.Image).attrs({
  source: rocket
})`
  position: absolute;
  right: 0;
`;
