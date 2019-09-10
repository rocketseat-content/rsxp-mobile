import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { BottomTabBar } from 'react-navigation-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

import Workshops from '../pages/Workshops';
import Profile from '../pages/Profile';

const Main = createSwitchNavigator({
  Login,
  ForgotPassword
});

const TabBarComponent = props => (
  <LinearGradient
    colors={['#7159c1', '#c759e0']}
    start={{ x: 0, y: 0.75 }}
    end={{ x: 1, y: 0.25 }}
    locations={[0, 1]}
    style={{
      height: 59 + getBottomSpace() / 1.5,
      paddingTop: getBottomSpace() * 0.3
    }}
  >
    <BottomTabBar
      {...props}
      style={{
        position: 'absolute',
        borderTopWidth: 0,
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'transparent'
      }}
    />
  </LinearGradient>
);

const SignedRoutes = createBottomTabNavigator(
  {
    Workshops: {
      screen: Workshops,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="code"
            size={24}
            color={focused ? '#fff' : 'rgba(255, 2555, 255, 0.5)'}
          />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon
            name="person"
            size={24}
            color={focused ? '#fff' : 'rgba(255, 2555, 255, 0.5)'}
          />
        )
      })
    }
  },
  {
    tabBarComponent: TabBarComponent,
    tabBarOptions: {
      inactiveTintColor: 'rgba(255, 2555, 255, 0.5)',
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 13
      }
    }
  }
);

export default signed =>
  createAppContainer(
    createSwitchNavigator(
      {
        Main,
        SignedRoutes
      },
      {
        initialRouteName: signed ? 'SignedRoutes' : 'Main'
      }
    )
  );
