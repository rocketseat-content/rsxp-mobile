import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';

const Placeholder = styled(ShimmerPlaceHolder).attrs({
  colorShimmer: ['#333', '#555', '#333'],
  duration: 1000
})``;

export const SessionsContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  border-color: rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
`;

export const WorkshopCards = styled.ScrollView`
  margin: 20px 0 0 10%;
`;

export const WorkshopsContainer = styled.View`
  width: 100%;
  height: 106px;
  margin-bottom: 15px;

  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: hidden;
`;

export const WorkshopCard = styled(LinearGradient).attrs({
  colors: ['#222', '#333'],
  start: { x: 0, y: 0.75 },
  end: { x: 1, y: 0.25 },
  locations: [0, 1]
})`
  width: 100%;
  height: 106px;
  justify-content: center;
  padding: 30px 0 30px 8px;
`;

export const WorkshopTitlePlaceholder = styled(Placeholder)`
  width: 90%;
  height: 16px;
  margin: 0 15px 5px;
`;

export const WorkshopDescriptionPlaceholder = styled(Placeholder)`
  width: 90%;
  height: 16px;
  margin-left: 15;
`;

export const WorkshopInstructorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
  margin-left: 15px;
`;

export const WorkshopInstructorPicturePlaceholder = styled(Placeholder)`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  margin-right: 5px;
`;

export const WorkshopInstructorNamePlaceholder = styled(Placeholder)`
  width: 99px;
  height: 12px;
`;
