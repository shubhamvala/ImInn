import { StyleSheet } from 'react-native';
import {
  Colors,
  Fonts,
  Metrics,
  moderateScale,
  scale,
  verticalScale,
} from '../../theme';

export const styles = StyleSheet.create({
  subContainer: {
    height: verticalScale(45),
  },
  subInnerContainer: {
    justifyContent: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(40),
    marginBottom: verticalScale(15),
  },
  flatListStyle: {
    borderRadius: moderateScale(50),
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  firstTab: {
    borderTopLeftRadius: moderateScale(25),
    borderBottomLeftRadius: moderateScale(25),
  },
  lastTab: {
    borderTopRightRadius: moderateScale(25),
    borderBottomRightRadius: moderateScale(25),
  },
  tabSubContainer: {
    width: Metrics.screenWidth / 2 - scale(48),
    justifyContent: 'center',
    height: verticalScale(45),
    alignItems: 'center',
  },
  tabActiveText: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.h5,
    color: Colors.white,
  },
  tabActiveTextBehind: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.h5,
  },
  tabInactiveText: {
    fontFamily: Fonts.type.nunitoSans.semiBold,
    fontSize: Fonts.size.h5,
  },
  radiusStyle: {
    borderRadius: moderateScale(50),
    overflow: 'hidden',
  },
  indicator: {
    position: 'absolute',
  },
});
