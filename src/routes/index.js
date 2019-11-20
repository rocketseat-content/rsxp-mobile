import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Login from '../pages/Login';
import CreateAccount from '../pages/CreateAccount';
import ForgotPassword from '../pages/ForgotPassword';
import RegulationReview from '../pages/RegulationReview';

import Workshops from '../pages/Workshops';
import WorkshopDetails from '../pages/WorkshopDetails';
import Profile from '../pages/Profile';

const SignRoutes = createAnimatedSwitchNavigator(
  {
    Login,
    CreateAccount,
    ForgotPassword,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={200} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  }
);

const BottomRoutes = createBottomTabNavigator(
  {
    Workshops,
    Profile,
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true,
      inactiveTintColor: 'rgba(255, 2555, 255, 0.5)',
      activeTintColor: '#fff',
      style: {
        height: 54,
        paddingVertical: 5,
        backgroundColor: '#222',
        borderTopColor: 'rgba(255, 255, 255, 0.4)',
      },
      labelStyle: {
        fontSize: 13,
      },
    },
  }
);

const AppRoutes = createStackNavigator(
  {
    BottomRoutes,
    WorkshopDetails,
  },
  {
    headerMode: 'none',
  }
);

function getInitialRoute(signed, accepted_regulation) {
  if (signed) {
    if (accepted_regulation) {
      return 'AppRoutes';
    }
    return 'RegulationReview';
  }
  return 'SignRoutes';
}

export default (signed, accepted_regulation) =>
  createAppContainer(
    createAnimatedSwitchNavigator(
      {
        SignRoutes,
        RegulationReview,
        AppRoutes,
      },
      {
        initialRouteName: getInitialRoute(signed, accepted_regulation),
        transition: (
          <Transition.Together>
            <Transition.Out
              type="fade"
              durationMs={300}
              interpolation="easeOut"
            />
            <Transition.In type="fade" delayMs={500} durationMs={300} />
          </Transition.Together>
        ),
      }
    )
  );
