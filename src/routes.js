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
import Logo from './utils/logo';

const headerConf = {
  headerLayoutPreset: 'center',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#244f44',
    },
    headerTintColor: '#F3FAEE',
    headerTitle: Logo,
  },
};

const DashboardStack = createStackNavigator(
  {
    Dashboard,
  },
  headerConf
);

const AppStack = createBottomTabNavigator({
  Dashboard: DashboardStack,
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
