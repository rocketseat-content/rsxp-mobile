import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import logoImage from '../../../assets/logo.png';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  background: #100f12;
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
  placeholderTextColor: '#999',
})`
  height: 48px;
  font-size: 17px;
  color: #fff;
  flex: 1;
`;

export const EnvelopeIcon = styled(Icon).attrs({
  name: 'mail-outline',
})`
  color: #999;
  font-size: 20px;
`;

export const LockIcon = styled(Icon).attrs({
  name: 'lock-outline',
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
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const NewAccountButton = styled(RectButton)`
  height: 42px;
  background-color: #00f5ff;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const NewAccountButtonText = styled.Text`
  color: #100f12;
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin: 30px 0 50px;
  align-items: center;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #999;
  font-size: 16px;
`;
