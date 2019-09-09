import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  margin-bottom: 415;
`;

export const Content = styled.View``;

export const SessionsContainer = styled.View`
  flex-direction: row;
  padding-bottom: 10;
  border-bottom-width: 4;
  border-color: #7159c1;
`;

export const WorkshopCards = styled.ScrollView`
  width: ${width * 0.9};
  margin-left: ${width * 0.1};
`;

export const Session = styled.View`
  align-items: center;
  flex: 1;
`;

export const SessionTitle = styled.Text`
  font-size: 16;
  color: #7159c1;
  opacity: ${props => (props.isSelected ? 1 : 0.4)};
  font-weight: bold;
  margin-bottom: 5;
`;

export const SessionDate = styled.Text`
  font-size: 13;
  color: #999;
  opacity: ${props => (props.isSelected ? 1 : 0.4)};
  font-weight: bold;
  margin-bottom: 5;
`;

export const WorkshopsContainer = styled.TouchableOpacity`
  margin-top: 15;
  width: 100%;
  height: 106;

  border-top-left-radius: 8;
  border-bottom-left-radius: 8;
  overflow: hidden;
`;

export const WorkshopCard = styled(LinearGradient).attrs({
  colors: ['#ccc', '#aaa'],
  start: { x: 0, y: 0.75 },
  end: { x: 1, y: 0.25 },
  locations: [0, 1]
})`
  width: 100%;
  height: 106;
  justify-content: center;
  padding-top: 30;
  padding-bottom: 30;
`;

export const WorkshopTitle = styled.Text`
  margin-bottom: 5;
  margin-left: 15;
  color: #fff;
  font-size: 16;
  font-weight: bold;
`;

export const WorkshopInstructorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15;
  margin-left: 15;
`;

export const WorkshopInstructorPicture = styled.Image`
  width: 24;
  height: 24;
  border-radius: 20;
  margin-right: 5;
`;

export const WorkshopInstructorName = styled.Text`
  color: #fff;
  font-size: 13;
  font-weight: bold;
`;
