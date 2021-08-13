import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../theme';

const styles = StyleSheet.create({
  tabBarMainContainer: {
    height: verticalScale(110),
  },
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(110),
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
    borderWidth: 1,
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabView: {
    alignItems: 'center',
  },
});

export { styles };
