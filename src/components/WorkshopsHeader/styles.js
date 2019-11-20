import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import smallLogo from '../../../assets/small-logo.svg';

export const Container = styled(LinearGradient).attrs({
  colors: ['#7A59C4', '#00DBFF'],
  start: { x: 0.3, y: 1 },
  end: { x: 1, y: 0 },
})`
  padding: ${Constants.statusBarHeight + 10}px 30px 20px;
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const SmallLogo = styled(smallLogo)``;

export const WorkshopsTitleSeparator = styled.View`
  width: 1px;
  height: 24px;
  opacity: 0.2;
  background-color: #fff;
  margin: 0 15px;
`;

export const WorkshopsTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const InfoIconButton = styled(TouchableOpacity)`
  margin-left: auto;
`;

export const InfoIcon = styled(MaterialIcons).attrs({
  name: 'exit-to-app',
})`
  font-size: 24px;
  color: #fff;
`;
