import React from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

import Workshops from '../pages/Workshops';
import WorkshopDetails from '../pages/WorkshopDetails';
import Profile from '../pages/Profile';

const Main = createAnimatedSwitchNavigator({
  Login,
  ForgotPassword
}, {
  transition: (
    <Transition.Together>
      <Transition.Out
        type="fade"
        durationMs={200}
        interpolation="easeIn"
      />
      <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
  ),
});

const BottomRoutes = createBottomTabNavigator(
  {
    Workshops,
    Profile,
  },
  {
    tabBarOptions: {
      inactiveTintColor: 'rgba(255, 2555, 255, 0.5)',
      activeTintColor: '#fff',
      style: {
        height: 54,
        paddingVertical: 5,
        backgroundColor: '#222',
        borderTopColor: "rgba(255, 255, 255, 0.4)"
      },
      labelStyle: {
        fontSize: 13
      }
    }
  }
);

const WorkshopRoutes = createStackNavigator(
  {
    BottomRoutes,
    WorkshopDetails
  },
  {
    headerMode: 'none'
  }
);

export default signed =>
  createAppContainer(
    createAnimatedSwitchNavigator(
      {
        Main,
        WorkshopRoutes
      },
      {
        initialRouteName: signed ? 'WorkshopRoutes' : 'Main',
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
