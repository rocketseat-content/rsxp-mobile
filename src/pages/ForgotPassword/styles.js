import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import logoImage from '../../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: #100F12;
`;

export const Logo = styled.Image.attrs({
  source: logoImage,
})`
  align-self: center;
  margin-bottom: 50px;
`;

export const FormContainer = styled.View`
  padding: 0 30px;
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
  placeholderTextColor: '#999'
})`
  height: 48px;
  font-size: 17px;
  color: #fff;
  flex: 1;
`;

export const EnvelopeIcon = styled(Icon).attrs({
  name: 'mail-outline'
})`
  color: #999;
  font-size: 20px;
`;

export const SubmitButton = styled(RectButton)`
  height: 50px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  color: #E6E6E6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const BackToLoginButton = styled.TouchableOpacity`
  margin-top: 30px;
  margin-bottom: 50px;
  align-items: center;
`;

export const BackToLoginButtonText = styled.Text`
  color: #999;
  font-size: 16px;
`;
