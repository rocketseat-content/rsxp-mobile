import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native-expo-image-cache';

export const Container = styled.View`
  flex: 1;
  background: #100f12;
`;

export const Content = styled.View`
  flex: 1;
`;

export const SessionsContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
`;

export const Session = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  align-items: center;
`;

export const SessionTitle = styled.Text`
  font-size: 16px;
  color: #fff;
  opacity: ${props => (props.isSelected ? 1 : 0.4)};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SessionDate = styled.Text`
  font-size: 13px;
  color: #999;
  opacity: ${props => (props.isSelected ? 1 : 0.4)};
  font-weight: bold;
  margin-bottom: 5px;
`;

export const SubscriptionStatus = styled.Text`
  color: #999;
  margin: 20px 0 0;
  text-align: center;
  font-size: 13px;
`;

export const WorkshopCards = styled.FlatList`
  margin: 20px 0 0 10%;
`;

export const Empty = styled.Text`
  text-align: center;
  color: #999;
  margin-right: 10%;
  font-size: 15px;
`;

export const WorkshopCard = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  height: 106px;
  align-items: stretch;
  background: #202020;
  margin-bottom: 15px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: row;
  overflow: hidden;
`;

export const TechColor = styled(LinearGradient).attrs({
  colors: ['#111', '#333'],
  start: { x: 0, y: 0.75 },
  end: { x: 1, y: 0.25 },
  locations: [0, 1],
})`
  align-self: stretch;
  width: 8px;
`;

export const WorkshopInfo = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 15px 0;
`;

export const WorkshopTitle = styled.Text`
  margin: 0 15px 5px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const WorkshopInstructorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 15px;
`;

export const WorkshopInstructorPicture = styled(Image)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 5px;
  background: #333;
`;

export const WorkshopInstructorName = styled.Text`
  color: #fff;
  font-size: 13px;
  font-weight: bold;
`;

export const WorkshopCompanyName = styled.Text`
  font-weight: normal;
  color: #999;
`;

export const WorkshopStatus = styled.Text`
  color: ${props => (props.full ? '#DC4747' : '#00f5ff')};
  font-size: 12px;
  font-weight: bold;
  margin-left: 10px;
`;
