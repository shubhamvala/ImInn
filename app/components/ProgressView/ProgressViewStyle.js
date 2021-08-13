import { StyleSheet } from 'react-native';
import { Fonts, scale, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(40),
    marginHorizontal: scale(24),
  },
  tabInnerContainer: {
    flex: 1,
    height: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIndicator: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: verticalScale(2),
  },
  tabText: {
    fontFamily: Fonts.type.lato.bold,
    fontSize: Fonts.size.label,
  },
});

export { styles };
