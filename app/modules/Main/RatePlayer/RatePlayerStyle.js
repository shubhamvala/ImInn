import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  moderateScale,
  scale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.button,
  itemHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(15),
  },
  itemHeaderTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
    paddingHorizontal: scale(24),
  },
  disableContainer: {
    opacity: 0.3,
  },
  centerContainer: {
    alignItems: 'center',
  },
  itemImageContainer: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(40),
  },
  itemTextContainer: {
    marginLeft: scale(18),
    marginRight: scale(18),
  },
});

export { styles };
