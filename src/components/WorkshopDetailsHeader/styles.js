import styled from 'styled-components/native';
import { lighten } from 'polished';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Constants from 'expo-constants';

export const Container = styled(LinearGradient).attrs((props) => ({
  colors: [props.color, lighten(0.2, props.color)],
  start: { x: 0.3, y: 1 },
  end: { x: 1, y: 0 },
}))`
  padding: ${Constants.statusBarHeight + 10}px 25px 20px;
  margin-bottom: 20px;
  flex-direction: row;
`;

export const BackButton = styled.TouchableOpacity`
`;

export const BackButtonIcon = styled(Icon).attrs({
  name: 'chevron-left'
})`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const WorkshopTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 15px;
`;
