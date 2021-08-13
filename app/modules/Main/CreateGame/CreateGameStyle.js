import { Platform, StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Fonts,
  moderateScale,
  scale,
  verticalScale,
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  tabContainer: {
    marginTop: verticalScale(30),
  },
  dropDownContainer: {
    position: 'absolute',
    right: scale(12),
    top: Platform.OS === 'ios' ? -verticalScale(8) : verticalScale(15),
  },
  inputView: {
    alignItems: 'center',
  },
  inputViewTextPicker: {
    textAlign: 'center',
  },
  datePicker: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  priceContainer: {
    ...ApplicationStyles.screen.flexRowContainer,
    justifyContent: 'space-between',
    marginHorizontal: scale(24),
    marginTop: verticalScale(12),
  },
  priceSelectContainer: {
    width: scale(80),
    height: verticalScale(55),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10),
  },
  priceInputIcon: {
    marginRight: scale(5),
  },
  descriptionRow: {
    marginLeft: scale(18),
  },
  descriptionStyle: {
    marginTop: verticalScale(16),
    marginLeft: scale(24),
  },
});

export { styles };
