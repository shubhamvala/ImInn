import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.text,
  loginMessage: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: moderateScale(22),
    marginTop: verticalScale(30),
  },
  roleContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(30),
    paddingHorizontal: scale(24),
  },
  roleSelectIcon: {
    paddingHorizontal: scale(6),
    paddingVertical: verticalScale(4),
  },
  roleSelectText: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.h5,
  },
  roleImageContainer: {
    flex: 1,
    width: '100%',
    marginBottom: verticalScale(80),
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    position: 'absolute',
    bottom: 0,
    marginBottom: verticalScale(30),
  },
});

export { styles };
