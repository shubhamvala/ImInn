import Colors from './Colors';
import Fonts from './Fonts';
import { moderateScale, scale, verticalScale } from './Metrics';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    flexContainer: {
      flex: 1,
    },
    flexRowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    flexRowCenterContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    authLogoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: verticalScale(30),
    },
  },
  text: {
    authLogoTitle: {
      fontFamily: Fonts.type.nunitoSans.bold,
      fontSize: moderateScale(32),
      color: Colors.white,
      marginLeft: scale(17),
    },
  },
  form: {
    textInput: {
      height: scale(68),
      borderRadius: scale(5),
      borderWidth: moderateScale(2),
      textAlignVertical: 'center',
      padding: 0,
      paddingHorizontal: scale(31),
      fontFamily: Fonts.type.lato.regular,
      fontSize: Fonts.size.text,
      color: Colors.black,
    },
  },
  button: {
    smallButtonContainer: {
      alignItems: 'center',
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(8),
    },
    iconButton: {
      marginRight: scale(12),
    },
    primary: {
      height: verticalScale(68),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(5),
      backgroundColor: Colors.black22,
    },
    primaryText: {
      fontFamily: Fonts.type.lato.medium,
      fontSize: Fonts.size.h6,
      color: Colors.white,
    },
    secondary: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: moderateScale(16),
      backgroundColor: Colors.black,
    },
    secondaryText: {
      fontFamily: Fonts.type.lato.regular,
      fontSize: moderateScale(24),
      color: Colors.white,
    },
  },
};

export default ApplicationStyles;
