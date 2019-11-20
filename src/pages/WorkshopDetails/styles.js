import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { FontAwesome5 } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Image } from 'react-native-expo-image-cache';

const AnimatedView = Animatable.View;

export const Container = styled.View`
  flex: 1;
  background: #100f12;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 30 },
})`
  flex: 1;
`;

export const WorkshopTitle = styled.Text`
  font-size: 20px;
  line-height: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 15px;
`;

export const InstructorContainer = styled.View`
  flex-direction: row;
`;

export const InstructorAvatar = styled(Image)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  margin-right: 10px;
  background: #333;
`;

export const Instructor = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InstructorInfo = styled.View``;

export const InstructorName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999;
`;

export const InstructorTitle = styled.Text`
  font-size: 12px;
  color: #777;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
`;

export const GithubIcon = styled(FontAwesome5).attrs({
  name: 'github',
})`
  font-size: 24px;
  color: #fff;
  margin-right: 15px;
`;

export const LinkedinIcon = styled(FontAwesome5).attrs({
  name: 'linkedin',
})`
  font-size: 24px;
  color: #fff;
`;

export const Separator = styled.View`
  height: ${StyleSheet.hairlineWidth};
  background-color: rgba(255, 255, 255, 0.2);
  margin: 15px 0;
`;

export const WorkshopDescriptionContainer = styled.View``;

export const WorkshopDescription = styled.Text`
  font-size: 18px;
  color: #ccc;
  line-height: 24px;
`;

export const SubmitButton = styled(RectButton)`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  height: 54px;
  border-radius: 27px;
  background-color: ${props => (props.subscribed ? '#DC4747' : '#7159c1')};
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ModalContainer = styled(AnimatedView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled(AnimatedView)`
  padding: 30px 20px;
  max-width: 320px;
  background: #fff;
  border-radius: 10px;
  opacity: 0;
`;

export const ModalTitle = styled.Text`
  font-size: 18px;
  color: #111;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

export const ModalDescription = styled.Text`
  text-align: center;
  font-size: 16px;
  margin-top: 15px;
  line-height: 24px;
  color: #444;
`;

export const ModalCloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  align-self: center;
  align-items: center;
  flex-direction: row;
`;

export const ModalCloseButtonText = styled.Text`
  font-size: 14px;
  color: #111;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 6px;
`;
