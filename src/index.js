import React from 'react';
import { useSelector } from 'react-redux';

import NavigationService from '../src/services/navigation';

import Routes from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const RoutesWrapper = Routes(signed);

  return (
    <RoutesWrapper
      ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)}
    />
  );
}
