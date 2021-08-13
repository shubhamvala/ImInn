import { StyleSheet } from 'react-native';
import {
  scale,
  verticalScale,
  Fonts,
  Colors,
  moderateScale,
} from '../../theme';

const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: scale(24),
    marginTop: verticalScale(16),
  },
  columnStyle: {
    justifyContent: 'space-between',
  },
  itemContainer: {
    width: scale(100),
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    fontFamily: Fonts.type.lato.regular,
    fontSize: Fonts.size.medium,
  },
});

export { styles };
