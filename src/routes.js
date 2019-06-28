import React from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';

import SignIn from './components/auth';
import Calendar from './components/calendar';
import Dashboard from './components/dashboard';
import Tasks from './components/tasks';

const AppStack = createBottomTabNavigator({
  Dashboard,
  Calendar,
  Tasks,
});

const AuthStack = createStackNavigator(
  {
    SignIn,
  },
  {
    headerMode: 'none',
  }
);

export const RootNavigator = isAuth => {
  return createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
      },
      {
        initialRouteName: isAuth ? 'App' : 'Auth',
      }
    )
  );
};
