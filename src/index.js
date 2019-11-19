import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import NavigationService from './services/navigation';

import createRoutes from './routes';

export default function App() {
  const { signed, accepted_regulation } = useSelector(
    state => state.auth,
    () => true
  );

  const RoutesWrapper = createRoutes(signed, accepted_regulation);

  return (
    <View style={{ flex: 1, backgroundColor: '#100F12' }}>
      <RoutesWrapper
        ref={navRef => NavigationService.setTopLevelNavigator(navRef)}
      />
    </View>
  );
}
