import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import NavigationService from '../src/services/navigation';

import Routes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed, () => true);

  const RoutesWrapper = Routes(signed);

  return (
    <View style={{ flex: 1, backgroundColor: '#100F12' }}>
      <RoutesWrapper
        ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
      />
    </View>
  );
}
