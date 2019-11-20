import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TabBar } from 'react-native-tab-view';
import Constants from 'expo-constants';

import conductImage from '../../../assets/conduct-code.svg';
import regulationImage from '../../../assets/regulation.svg';

export const Container = styled.View`
  flex: 1;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Tabs = styled(TabBar).attrs({
  indicatorStyle: { backgroundColor: 'white' },
  activeColor: '#fff',
  inactiveColor: '#999',
  labelStyle: {
    fontWeight: 'bold',
    letterSpacing: 2.8,
    fontSize: 13,
    textAlign: 'center',
  },
})`
  background: transparent;
  margin: 0 20px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 30 },
})`
  margin-bottom: 110px;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.Text`
  margin: 20px 0;
  font-size: 16px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
`;

export const ConductCodeImage = styled(conductImage)`
  align-self: center;
  margin-bottom: 30px;
`;

export const RegulationImage = styled(regulationImage)`
  align-self: center;
  margin-bottom: 30px;
`;

export const Regulation = styled.Text`
  font-size: 18px;
  color: #fff;
  line-height: 26px;
`;

export const ApproveButton = styled(RectButton)`
  position: absolute;
  bottom: 90px;
  left: 30px;
  right: 30px;
  height: 54px;
  background-color: #7159c1;
  justify-content: center;
  align-items: center;
`;

export const ApproveButtonText = styled.Text`
  color: #e6e6e6;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;

export const LogoutButton = styled(RectButton)`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 30px;
  height: 54px;
  background-color: #999;
  justify-content: center;
  align-items: center;
`;

export const LogoutButtonText = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2.8px;
`;
