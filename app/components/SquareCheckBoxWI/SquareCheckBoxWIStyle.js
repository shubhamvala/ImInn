import { StyleSheet } from 'react-native';
import { scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: scale(24),
    marginTop: verticalScale(24),
  },
  itemTextContainer: {
    marginLeft: scale(18),
  },
  itemText: {
    fontFamily: Fonts.type.lato.regular,
    fontSize: Fonts.size.medium,
  },
  itemDesc: {
    fontFamily: Fonts.type.lato.regular,
    fontSize: Fonts.size.small,
    marginTop: verticalScale(10),
  },
});

export { styles };
