import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RectButton } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  margin-left: ${width * 0.1};
  justify-content: space-between;
`;

export const InputTitle = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  border-bottom-width: 0.5;
  border-color: #ddd;
  justify-content: space-between;
  margin-bottom: 30;
`;

export const Input = styled.TextInput`
  height: 48;
  font-size: 16;
  width: ${width * 0.8};
`;

export const EnvelopeIcon = styled(Icon).attrs({
  name: 'mail-outline'
})`
  margin-right: ${width * 0.1};
  color: #c8c8c8;
  font-size: 20;
`;

export const LockIcon = styled(Icon).attrs({
  name: 'lock-outline'
})`
  margin-right: ${width * 0.1};
  color: #c8c8c8;
  font-size: 20;
`;

export const SubmitButton = styled(RectButton)`
  margin-right: ${width * 0.1};
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

export const ForgotPasswordButton = styled.TouchableOpacity`
  margin-right: ${width * 0.1};
  margin-top: 30;
  margin-bottom: 50;
  align-items: center;
`;

export const ForgotPasswordButtonText = styled.Text`
  color: #666;
  font-size: 16;
`;
