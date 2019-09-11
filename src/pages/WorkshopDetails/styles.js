import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RectButton } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');

export const Container = styled.View``;

export const Content = styled.ScrollView`
  margin-horizontal: 30;
  height: ${height - 250};
`;

export const WorkshopTitle = styled.Text`
  font-size: 20;
  font-weight: bold;
  color: #333;
  margin-bottom: 15;
`;

export const InstructorContainer = styled.View`
  flex-direction: row;
`;

export const InstructorAvatar = styled.Image`
  width: 36;
  height: 36;
  border-radius: 18;
  margin-right: 10;
`;

export const Instructor = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const InstructorInfo = styled.View``;

export const InstructorName = styled.Text`
  font-size: 14;
  font-weight: bold;
  color: #444;
`;

export const InstructorTitle = styled.Text`
  font-size: 12;
  color: #666;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const GithubIcon = styled(Icon).attrs({
  name: 'github'
})`
  font-size: 24;
  color: #333;
  margin-right: 15;
`;

export const LinkedinIcon = styled(Icon).attrs({
  name: 'linkedin'
})`
  font-size: 24;
  color: #2087ff;
`;

export const Separator = styled.View`
  width: ${width * 0.8};
  height: 1px;
  background-color: #eee;
  margin-vertical: 15;
`;

export const WorkshopDescriptionContainer = styled.View``;

export const WorkshopDescription = styled.Text`
  font-size: 18;
  color: #444;
`;

export const SubmitButton = styled(RectButton)`
  position: absolute;
  bottom: 30;
  left: 30;
  right: 30;
  height: 54;
  border-radius: 30;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18;
  font-weight: bold;
`;
