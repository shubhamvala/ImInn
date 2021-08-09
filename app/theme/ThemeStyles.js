import { StyleSheet } from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import { Metrics, moderateScale, scale, verticalScale } from './Metrics';

const styles = (colors) =>
  StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: colors.mainBackground,
    },
    loginBackground: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: colors.background,
      borderTopLeftRadius: moderateScale(25),
      borderTopRightRadius: moderateScale(25),
      elevation: 75,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowColor: colors.shadow,
      shadowOpacity: 0.05,
      shadowRadius: verticalScale(20),
    },
    loginInputContainer: {
      width: Metrics.screenWidth - scale(60),
      flexDirection: 'row',
      alignItems: 'center',
      height: verticalScale(50),
      marginTop: verticalScale(30),
      borderRadius: moderateScale(40),
      borderWidth: 1,
      borderColor: colors.inactive,
      paddingHorizontal: scale(20),
    },
    loginInputIcon: {
      marginRight: scale(20),
    },
    loginInput: {
      fontFamily: Fonts.type.nunitoSans.regular,
      fontSize: Fonts.size.label,
      color: colors.textPrimary,
      padding: 0,
    },
    loginButton: {
      width: Metrics.screenWidth - scale(60),
      height: verticalScale(50),
      marginTop: verticalScale(40),
      borderRadius: moderateScale(40),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.primary,
    },
    loginButtonText: {
      fontFamily: Fonts.type.nunitoSans.bold,
      fontSize: Fonts.size.input,
      color: Colors.white,
    },
    tabTitle: {
      fontFamily: Fonts.type.nunitoSans.regular,
      fontSize: Fonts.size.small,
      color: colors.primary,
      marginTop: verticalScale(10),
    },
    tabTitleInactive: {
      color: colors.inactive,
    },
    tabProfile: {
      padding: moderateScale(8),
      borderRadius: moderateScale(20),
      backgroundColor: colors.primaryOpacity10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default styles;
