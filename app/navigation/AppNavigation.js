import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Routes } from '../constants';
import { useThemedStyles } from '../hooks';

//Screens
import Login from '../modules/Auth/Login/Login';
import SelectRole from '../modules/Auth/SelectRole/SelectRole';
import Dashboard from '../modules/Main/Dashboard/Dashboard';
import Profile from '../modules/Main/Profile/Profile';
import Empty from '../modules/Main/Empty/Empty';
import TabBar from './TabBar';
import CreateGame from '../modules/Main/CreateGame/CreateGame';
import JoinGame from '../modules/Main/JoinGame/JoinGame';
import RatePlayer from '../modules/Main/RatePlayer/RatePlayer';
import Chat from '../modules/Main/Chat/Chat';

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
      <Tab.Screen name={Routes.Profile} component={Profile} />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={TransitionScreenOptions}>
      <Stack.Screen name={Routes.Tab} component={TabStack} />
      <Stack.Screen name={Routes.CreateGame} component={CreateGame} />
      <Stack.Screen name={Routes.JoinGame} component={JoinGame} />
      <Stack.Screen name={Routes.RatePlayer} component={RatePlayer} />
      <Stack.Screen name={Routes.Chat} component={Chat} />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const { themType } = useThemedStyles();
  return (
    <NavigationContainer theme={themType}>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name={Routes.Main} component={MainStack} />
        <Stack.Screen name={Routes.Auth} component={AuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
