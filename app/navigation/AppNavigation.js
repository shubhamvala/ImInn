import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../theme';
import { Routes } from '../constants';
import { Appearance } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Screens
import Login from '../modules/Auth/Login/Login';
import SelectRole from '../modules/Auth/SelectRole/SelectRole';
import Dashboard from '../modules/Main/Dashboard/Dashboard';
import Empty from '../modules/Main/Empty/Empty';
import TabBar from './TabBar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TransitionScreenOptions = {
  headerShown: false,
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.SelectRole} component={SelectRole} />
    </Stack.Navigator>
  );
};

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={TransitionScreenOptions}
    >
      <Tab.Screen name={Routes.Dashboard} component={Dashboard} />
      <Tab.Screen name={Routes.Stats} component={Empty} />
      <Tab.Screen name={Routes.Matches} component={Empty} />
      <Tab.Screen name={Routes.Rating} component={Empty} />
      <Tab.Screen name={Routes.Profile} component={Empty} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const theme = Appearance.getColorScheme();
  const themType = theme === 'dark' ? Colors.darkTheme : Colors.lightTheme;
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer theme={themType}>
        <Stack.Navigator screenOptions={TransitionScreenOptions}>
          <Stack.Screen name={Routes.Auth} component={AuthStack} />
          <Stack.Screen name={Routes.Main} component={TabStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNavigation;
