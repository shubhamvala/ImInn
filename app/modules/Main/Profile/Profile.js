import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useThemedStyles } from '../../../hooks';

const useProfile = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();

  return { colors, themedStyles, statusBarStyle };
};

const Profile = () => {
  const { colors, themedStyles, statusBarStyle } = useProfile();
  return (
    <SafeAreaView style={themedStyles.mainContainer}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={colors.mainBackground}
      />
    </SafeAreaView>
  );
};

export default Profile;
