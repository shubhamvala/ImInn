import React from 'react';
import { SafeAreaView } from 'react-native';
import { useThemedStyles } from '../../../hooks';

const Empty = () => {
  const { themedStyles } = useThemedStyles();
  return <SafeAreaView style={themedStyles.mainContainer}></SafeAreaView>;
};

export default Empty;
