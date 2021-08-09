import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from '../theme';

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(110),
    backgroundColor: 'white',
    borderTopLeftRadius: moderateScale(30),
    borderTopRightRadius: moderateScale(30),
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
