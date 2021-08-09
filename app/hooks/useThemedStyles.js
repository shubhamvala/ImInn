import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { ThemeStyles } from "../theme";

const useThemedStyles = () => {
  const colors = useTheme();
  const themedStyles = useMemo(() => ThemeStyles(colors), [colors]);

  return { colors, themedStyles };
};

export default useThemedStyles;
