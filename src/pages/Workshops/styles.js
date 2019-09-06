import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View``;

export const Content = styled.ScrollView`
  width: ${width * 0.9};
  margin-left: ${width * 0.1};
`;
