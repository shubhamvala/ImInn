import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  Fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.text,
  welcomeTitle: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.label,
    marginTop: verticalScale(30),
  },
  loginMessage: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: moderateScale(22),
    marginTop: verticalScale(15),
  },
  loginBorderContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(30),
  },
  loginLeftBorder: {
    flex: 1,
    marginLeft: scale(30),
    height: 1,
  },
  loginRightBorder: {
    flex: 1,
    marginRight: scale(30),
    height: 1,
  },
  loginBorderText: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.medium,
    marginHorizontal: scale(16),
  },
  loginSocialContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(30),
    paddingHorizontal: scale(15),
  },
  loginSocialButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    height: verticalScale(50),
    marginHorizontal: scale(15),
    borderRadius: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: moderateScale(20),
    elevation: 5,
  },
  loginGoogleButton: {
    backgroundColor: Colors.white,
  },
  loginFacebookButton: {
    backgroundColor: Colors.blueShade44,
  },
  loginSocialText: {
    fontFamily: Fonts.type.nunitoSans.bold,
    fontSize: Fonts.size.input,
    marginLeft: scale(15),
  },
  loginGoogleText: {
    color: Colors.blackShade25,
  },
  loginFacebookText: {
    color: Colors.white,
  },
});

export { styles };
