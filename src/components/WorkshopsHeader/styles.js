import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

import smallMask from '../../../assets/small-mask';
import smallLogo from '../../../assets/small-logo.svg';

export const Container = styled.View``;

export const SmallMask = styled(smallMask)`
  width: ${width};
  height: ${width / 2.85};
  margin-bottom: 20;
`;

export const SmallLogo = styled(smallLogo)`
  position: absolute;
  top: ${height * 0.08};
  left: 10%;
`;

export const WorkshopsTitleSeparator = styled.View`
  position: absolute;
  top: ${height * 0.09};
  left: 26%;
  width: 1;
  height: 24;
  opacity: 0.2;
  background-color: #fff;
`;

export const WorkshopsTitle = styled.Text`
  position: absolute;
  top: ${height * 0.09};
  left: 30%;
  font-size: 18;
  font-weight: bold;
  color: #fff;
`;

export const InfoIconButton = styled(TouchableOpacity)`
  position: absolute;
  top: ${height * 0.08};
  right: 10%;
`;

export const InfoIcon = styled(Icon).attrs({
  name: 'exit-to-app'
})`
  font-size: 24;
  color: #fff;
`;
