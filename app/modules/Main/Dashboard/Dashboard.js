import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  SectionList,
  StatusBar,
} from 'react-native';
import { styles } from './DashboardStyle';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';
import { Routes, Strings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../theme';

const { Plus, Search, EmptyDashboard } = SVG;

const useDashboard = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <EmptyDashboard fill={colors.primary} />
        <Text style={[styles.emptyTextStyle, { color: colors.textPrimary }]}>
          {Strings.emptyMatches}
        </Text>
      </View>
    );
  }, [colors.primary, colors.textPrimary]);

  const renderItem = useCallback(({ item }) => {
    <View />;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    <View />;
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return item + index;
  }, []);

  const onAddNewGame = useCallback((item) => {}, []);

  const onPressCreate = useCallback(() => {
    navigation.navigate(Routes.CreateGame, { onAddNewGame });
  }, [navigation, onAddNewGame]);

  const onPressSearch = useCallback(() => {
    navigation.navigate(Routes.SelectRole);
  }, [navigation]);

  return {
    colors,
    themedStyles,
    statusBarStyle,
    data,
    renderItem,
    renderSectionHeader,
    renderEmptyComponent,
    keyExtractor,
    onPressCreate,
    onPressSearch,
  };
};

const Dashboard = () => {
  const {
    colors,
    themedStyles,
    statusBarStyle,
    data,
    renderItem,
    renderSectionHeader,
    renderEmptyComponent,
    keyExtractor,
    onPressCreate,
    onPressSearch,
  } = useDashboard();
  return (
    <SafeAreaView style={themedStyles.mainContainer}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={colors.mainBackground}
      />
      <SectionList
        sections={data}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
      />
      <TouchableOpacity
        style={[
          styles.plusFloating,
          { backgroundColor: colors.primary, shadowColor: colors.shadow },
        ]}
        onPress={onPressCreate}
      >
        <Plus />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.searchFloating,
          { backgroundColor: colors.primary, shadowColor: colors.shadow },
        ]}
        onPress={onPressSearch}
      >
        <Search stroke={Colors.white} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
