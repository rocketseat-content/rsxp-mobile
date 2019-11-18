import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Profile() {
  return <View />;
}

Profile.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <Icon
      name="person"
      size={24}
      color={focused ? '#fff' : 'rgba(255, 2555, 255, 0.5)'}
    />
  )
}