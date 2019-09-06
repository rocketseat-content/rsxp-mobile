import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'react-native';

import NavigationService from './src/services/navigation';

import { store, persistor } from './src/store';

import Routes from './src/routes';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" />
        <Routes
          ref={navigatorRef =>
            NavigationService.setTopLevelNavigator(navigatorRef)
          }
        />
      </PersistGate>
    </Provider>
  );
}
