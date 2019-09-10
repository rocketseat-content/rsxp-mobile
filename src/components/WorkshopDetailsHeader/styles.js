import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get('window');

import smallMask from '../../../assets/small-mask.svg';

export const Container = styled.View``;

export const SmallMask = styled(smallMask)`
  width: 100%;
  margin-bottom: 20;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: ${height * 0.08 - 1};
  left: 10%;
`;

export const BackButtonIcon = styled(Icon).attrs({
  name: 'chevron-left'
})`
  font-size: 24;
  font-weight: bold;
  color: #fff;
`;

export const WorkshopTitle = styled.Text`
  position: absolute;
  width: ${width * 0.7};
  top: ${height * 0.08};
  left: 20%;
  font-size: 18;
  font-weight: bold;
  color: #fff;
`;
