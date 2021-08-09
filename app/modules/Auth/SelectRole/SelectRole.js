import React, { useState, useCallback } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './SelectRoleStyle';
import { useThemedStyles } from '../../../hooks';
import { Colors } from '../../../theme';
import { SVG } from '../../../assets';
import { Routes, Strings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';

const { AppLogo, Back, Keeper, Defender, Midfielder, Striker } = SVG;

const useSelectRole = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const navigation = useNavigation();

  const getRoleTitle = useCallback(
    (value) => {
      switch (currentRole) {
        case 0:
          return { title: Strings.keeper, icon: Keeper };
        case 1:
          return { title: Strings.defender, icon: Defender };
        case 2:
          return { title: Strings.midfielder, icon: Midfielder };
        case 3:
          return { title: Strings.striker, icon: Striker };
        default:
          return { title: '', icon: '' };
      }
    },
    [currentRole]
  );

  const onPressLeft = useCallback(() => {
    if (currentRole > 0) {
      setCurrentRole(currentRole - 1);
    }
  }, [currentRole]);

  const onPressRight = useCallback(() => {
    if (currentRole < 3) {
      setCurrentRole(currentRole + 1);
    }
  }, [currentRole]);

  const onPressSelect = useCallback(() => {
    navigation.navigate(Routes.Main);
  }, [navigation]);

  return {
    currentRole,
    getRoleTitle,
    onPressLeft,
    onPressRight,
    onPressSelect,
  };
};

const SelectRole = () => {
  const { colors, themedStyles } = useThemedStyles();
  const {
    currentRole,
    getRoleTitle,
    onPressLeft,
    onPressRight,
    onPressSelect,
  } = useSelectRole();

  const Icon = getRoleTitle().icon;

  return (
    <View style={styles.flexContainer}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={Colors.transparent}
      />
      <LinearGradient
        style={styles.flexContainer}
        colors={[colors.primary, colors.primaryLight]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <SafeAreaView
          style={styles.flexContainer}
          edges={['right', 'top', 'left']}
        >
          <View style={styles.authLogoContainer}>
            <AppLogo fill={colors.primary} />
            <Text style={styles.authLogoTitle}>
              {Strings.appName.toUpperCase()}
            </Text>
          </View>
          <View style={themedStyles.loginBackground}>
            <Text style={[styles.loginMessage, { color: colors.textPrimary }]}>
              {Strings.selectRoleMessage}
            </Text>
            <View style={styles.roleContainer}>
              <TouchableOpacity
                disabled={currentRole === 0}
                style={[
                  styles.roleSelectIcon,
                  { opacity: currentRole === 0 ? 0 : 1 },
                ]}
                onPress={onPressLeft}
              >
                <Back stroke={colors.textPrimary} />
              </TouchableOpacity>
              <View>
                <Text
                  style={[styles.roleSelectText, { color: colors.textPrimary }]}
                >
                  {getRoleTitle().title}
                </Text>
              </View>
              <TouchableOpacity
                disabled={currentRole === 3}
                style={[
                  styles.roleSelectIcon,
                  {
                    opacity: currentRole === 3 ? 0 : 1,
                    transform: [{ rotate: '180deg' }],
                  },
                ]}
                onPress={onPressRight}
              >
                <Back stroke={colors.textPrimary} />
              </TouchableOpacity>
            </View>
            <View style={styles.roleImageContainer}>
              <Icon fill={colors.primary} />
            </View>
            <TouchableOpacity
              style={[themedStyles.loginButton, styles.selectButton]}
              onPress={onPressSelect}
            >
              <Text style={themedStyles.loginButtonText}>{Strings.select}</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default SelectRole;
