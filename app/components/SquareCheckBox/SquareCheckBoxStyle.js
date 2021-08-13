import { StyleSheet } from 'react-native';
import { scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(24),
    marginTop: verticalScale(12),
  },
  itemIcon: {
    marginLeft: scale(18),
  },
  itemText: {
    fontFamily: Fonts.type.lato.regular,
    fontSize: Fonts.size.medium,
    marginLeft: scale(18),
  },
});

export { styles };
