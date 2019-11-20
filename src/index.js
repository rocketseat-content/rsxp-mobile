import React from 'react';
import { View, YellowBox } from 'react-native';
import { useSelector } from 'react-redux';
import { ActionSheetProvider } from '@expo/react-native-action-sheet';

import NavigationService from './services/navigation';

import createRoutes from './routes';

YellowBox.ignoreWarnings(['ReactNative.NativeModules.LottieAnimationView']);

export default function App() {
  const { signed, user } = useSelector(state => state.auth, () => true);

  const RoutesWrapper = createRoutes(signed, user.accepted_regulation);

  return (
    <ActionSheetProvider>
      <View style={{ flex: 1, backgroundColor: '#100F12' }}>
        <RoutesWrapper
          ref={navRef => NavigationService.setTopLevelNavigator(navRef)}
        />
      </View>
    </ActionSheetProvider>
  );
}
