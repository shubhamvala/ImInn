import { useMemo } from 'react';
import { Appearance } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Colors, ThemeStyles } from '../theme';

const useThemedStyles = () => {
  const colors = useTheme();
  const themedStyles = useMemo(() => ThemeStyles(colors), [colors]);
  const theme = Appearance.getColorScheme();
  const themType = theme === 'dark' ? Colors.darkTheme : Colors.lightTheme;
  const statusBarStyle = theme === 'dark' ? 'light-content' : 'dark-content';

  return { colors, themedStyles, theme, themType, statusBarStyle };
};

export default useThemedStyles;
