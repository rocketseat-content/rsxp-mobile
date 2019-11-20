import styled from 'styled-components/native';
import { StyleSheet, Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Constants from 'expo-constants';

export const Container = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  flex: 1;
  background: #100f12;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Content = styled.ScrollView``;

export const AvatarInput = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  align-self: center;
  margin-top: 30px;
  background: #333;
`;

export const AvatarDesc = styled.Text`
  color: #999;
  font-size: 13px;
  text-align: center;
  margin-top: 10px;
`;

export const FormContainer = styled.View`
  padding: 30px;
`;

export const InputTitle = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-color: rgba(255, 255, 255, 0.2);
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  height: 48px;
  font-size: 17px;
  color: #fff;
  flex: 1;
`;

export const SwitchContainer = styled.View`
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SwitchText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
  text-transform: uppercase;
`;

export const SubmitButton = styled(RectButton)`
  height: 50px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
  text-transform: uppercase;
`;
