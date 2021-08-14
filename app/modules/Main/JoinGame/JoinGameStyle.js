import { StyleSheet } from 'react-native';
import { ApplicationStyles, scale, verticalScale } from '../../../theme';

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
  listContainer: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
  },
  gap: {
    width: scale(12),
  },
});

export { styles };
