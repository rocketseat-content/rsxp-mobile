import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled.View``;

export const SessionsContainer = styled.View`
  flex-direction: row;
`;

export const WorkshopCards = styled.View`
  width: ${width * 0.9};
  margin-left: ${width * 0.1};
  margin-top: 20;
`;

export const Session = styled.View`
  align-items: center;
  flex: 1;
`;

export const SessionPlaceholder = styled(ShimmerPlaceHolder)`
  width: 62;
  height: 16;
  margin-bottom: 5;
`;

export const SessionDatePlaceholder = styled(ShimmerPlaceHolder)`
  width: 42;
  height: 12;
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
`;

export const WorkshopTitlePlaceholder = styled(ShimmerPlaceHolder)`
  width: ${width * 0.8};
  height: 16;
  margin-bottom: 5;
  margin-left: 15;
`;

export const WorkshopDescriptionPlaceholder = styled(ShimmerPlaceHolder)`
  width: ${width * 0.8};
  height: 16;
  margin-left: 15;
`;

export const WorkshopInstructorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15;
  margin-left: 15;
`;

export const WorkshopInstructorPicturePlaceholder = styled(ShimmerPlaceHolder)`
  width: 24;
  height: 24;
  border-radius: 20;
  margin-right: 5;
`;

export const WorkshopInstructorNamePlaceholder = styled(ShimmerPlaceHolder)`
  width: 99;
  height: 12;
`;
