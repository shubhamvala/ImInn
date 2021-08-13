import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './AppNavigationStyle';
import { useThemedStyles } from '../hooks';
import { Routes } from '../constants';
import { SVG } from '../assets';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { DashboardIcon, StatsIcon, FieldIcon, StarIcon, PlusTabIcon } = SVG;

const TabBar = ({ state, descriptors, navigation }) => {
  const { colors, themedStyles } = useThemedStyles();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.tabBarMainContainer,
        {
          backgroundColor: colors.mainBackground,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View
        style={[
          styles.tabBarContainer,
          {
            backgroundColor: colors.background,
            paddingBottom: insets.bottom,
            borderColor: colors.border,
          },
        ]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          let Icon;

          switch (label) {
            case Routes.Dashboard:
              Icon = DashboardIcon;
              break;

            case Routes.Stats:
              Icon = StatsIcon;
              break;

            case Routes.Matches:
              Icon = FieldIcon;
              break;

            case Routes.Rating:
              Icon = StarIcon;
              break;

            default:
              Icon = PlusTabIcon;
              break;
          }

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabBarItem}
            >
              {label === Routes.Profile ? (
                <View style={styles.tabView}>
                  <View style={themedStyles.tabProfile}>
                    <Icon stroke={colors.primary} />
                  </View>
                  <Text
                    style={[
                      themedStyles.tabTitle,
                      !isFocused && themedStyles.tabTitleInactive,
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              ) : (
                <View style={styles.tabView}>
                  <Icon stroke={isFocused ? colors.primary : colors.inactive} />
                  <Text
                    style={[
                      themedStyles.tabTitle,
                      !isFocused && themedStyles.tabTitleInactive,
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
