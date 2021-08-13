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
  flexCenterContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    marginHorizontal: scale(90),
    marginTop: verticalScale(250),
  },
  plusFloating: {
    position: 'absolute',
    right: moderateScale(30),
    bottom: moderateScale(30),
    width: moderateScale(60),
    height: moderateScale(60),
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
    zIndex: 10,
  },
  searchFloating: {
    position: 'absolute',
    right: moderateScale(30),
    bottom: moderateScale(110),
    width: moderateScale(60),
    height: moderateScale(60),
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
    zIndex: 10,
  },
  emptyTextStyle: {
    fontFamily: Fonts.type.nunitoSans.bold,
    fontSize: Fonts.size.label,
    textAlign: 'center',
    marginTop: verticalScale(30),
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(24),
    paddingHorizontal: scale(20),
  },
  roundContainer: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(23),
    minWidth: scale(105),
    borderRadius: moderateScale(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  successTitle: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: moderateScale(13),
    marginLeft: scale(10),
  },
  normalTitle: {
    fontFamily: Fonts.type.nunitoSans.bold,
    fontSize: Fonts.size.medium,
    marginLeft: scale(10),
  },
});

export { styles };
