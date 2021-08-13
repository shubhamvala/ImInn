import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './LoginStyle';
import { useThemedStyles } from '../../../hooks';
import { Colors, moderateScale, scale, verticalScale } from '../../../theme';
import { SVG } from '../../../assets';
import { Segment } from '../../../components';
import { Strings, FixedData, Routes } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { cloneDeep } from 'lodash';

const { AppLogo, Email, Password, Google, Facebook } = SVG;

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState(0);
  const navigation = useNavigation();

  const onChangeTab = useCallback((value) => {
    setTab(value);
  }, []);

  const onChangeEmail = useCallback((value) => {
    setEmail(value);
  }, []);

  const onChangePassword = useCallback((value) => {
    setPassword(value);
  }, []);

  const onPressLogin = useCallback(() => {
    navigation.navigate(Routes.SelectRole);
  }, [navigation]);

  const onPressGoogleLogin = useCallback(() => {}, []);

  const onPressFacebookLogin = useCallback(() => {}, []);

  return {
    tab,
    email,
    password,
    onChangeTab,
    onChangeEmail,
    onChangePassword,
    onPressLogin,
    onPressGoogleLogin,
    onPressFacebookLogin,
  };
};

const Login = () => {
  const { colors, themedStyles } = useThemedStyles();
  const {
    tab,
    email,
    password,
    onChangeTab,
    onChangeEmail,
    onChangePassword,
    onPressLogin,
    onPressGoogleLogin,
    onPressFacebookLogin,
  } = useLogin();
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
            <Text style={[styles.welcomeTitle, { color: colors.primary }]}>
              {Strings.welcome}
            </Text>
            <Text style={[styles.loginMessage, { color: colors.textPrimary }]}>
              {Strings.loginMessage}
            </Text>
            <Segment
              tabs={cloneDeep(FixedData.loginTabData)}
              onTabChange={onChangeTab}
            />
            <View
              style={[
                themedStyles.loginInputContainer,
                {
                  borderColor: email !== '' ? colors.primary : colors.inactive,
                },
              ]}
            >
              <View style={themedStyles.loginInputIcon}>
                <Email
                  width={scale(30)}
                  height={verticalScale(22)}
                  stroke={email !== '' ? colors.primary : colors.inactive}
                />
              </View>
              <TextInput
                style={themedStyles.loginInput}
                autoCapitalize="none"
                placeholder={Strings.emailPlaceholder}
                placeholderTextColor={colors.inactive}
                underlineColorAndroid={Colors.transparent}
                keyboardType="email-address"
                returnKeyType="next"
                value={email}
                onChangeText={onChangeEmail}
              />
            </View>
            <View
              style={[
                themedStyles.loginInputContainer,
                {
                  borderColor:
                    password !== '' ? colors.primary : colors.inactive,
                },
              ]}
            >
              <View style={themedStyles.loginInputIcon}>
                <Password
                  width={scale(28)}
                  height={verticalScale(20)}
                  fill={password !== '' ? colors.primary : colors.inactive}
                />
              </View>
              <TextInput
                secureTextEntry
                style={themedStyles.loginInput}
                autoCapitalize="none"
                placeholder={Strings.password}
                placeholderTextColor={colors.inactive}
                underlineColorAndroid={Colors.transparent}
                returnKeyType="done"
                value={password}
                onChangeText={onChangePassword}
              />
            </View>
            <TouchableOpacity
              style={themedStyles.loginButton}
              onPress={onPressLogin}
            >
              <Text style={themedStyles.loginButtonText}>
                {tab === 0 ? Strings.login : Strings.signUp}
              </Text>
            </TouchableOpacity>
            <View style={styles.loginBorderContainer}>
              <View
                style={[
                  styles.loginLeftBorder,
                  { backgroundColor: colors.border },
                ]}
              />
              <Text
                style={[styles.loginBorderText, { color: colors.inactive }]}
              >
                {Strings.orUsing}
              </Text>
              <View
                style={[
                  styles.loginRightBorder,
                  { backgroundColor: colors.border },
                ]}
              />
            </View>
            <View style={styles.loginSocialContainer}>
              <TouchableOpacity
                style={[
                  styles.loginSocialButtonContainer,
                  styles.loginGoogleButton,
                  { shadowColor: colors.shadow },
                ]}
                onPress={onPressGoogleLogin}
              >
                <Google width={moderateScale(21)} height={moderateScale(21)} />
                <Text style={[styles.loginSocialText, styles.loginGoogleText]}>
                  {Strings.google}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.loginSocialButtonContainer,
                  styles.loginFacebookButton,
                  { shadowColor: colors.shadow },
                ]}
                onPress={onPressFacebookLogin}
              >
                <Facebook
                  width={moderateScale(21)}
                  height={moderateScale(21)}
                />
                <Text
                  style={[styles.loginSocialText, styles.loginFacebookText]}
                >
                  {Strings.facebook}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? undefined : 'padding'}
      />
    </View>
  );
};

export default Login;
