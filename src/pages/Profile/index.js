import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './styles';

export default function Profile() {
  return <Container />;
}

Profile.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={24} color={tintColor} />
  ),
};
