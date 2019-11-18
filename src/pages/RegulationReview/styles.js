import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30, paddingBottom: 70 },
  showsVerticalScrollIndicator: false,
})``;

export const Title = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
`;

export const Regulation = styled.Text`
  font-size: 18px;
  color: #fff;
  line-height: 26px;
`;

export const ApproveButton = styled(RectButton)`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  height: 54px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const ApproveButtonText = styled.Text`
  color: #E6E6E6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

