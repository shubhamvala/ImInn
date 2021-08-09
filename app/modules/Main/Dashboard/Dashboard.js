import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  SectionList,
} from 'react-native';
import { styles } from './DashboardStyle';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';
import { Strings } from '../../../constants';

const { Plus, Search, EmptyDashboard } = SVG;

const useDashboard = () => {
  const { colors, themedStyles } = useThemedStyles();
  const [data, setData] = useState([]);

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={styles.emptyContainer}>
        <EmptyDashboard fill={colors.primary} />
        <Text style={[styles.emptyTextStyle, { color: colors.textPrimary }]}>
          {Strings.emptyMatches}
        </Text>
      </View>
    );
  }, []);

  const renderItem = useCallback(({ item }) => {
    <View />;
  }, []);

  const renderSectionHeader = useCallback(({ section }) => {
    <View />;
  }, []);

  const keyExtractor = useCallback((item, index) => {
    return item + index;
  }, []);

  return {
    colors,
    themedStyles,
    data,
    renderItem,
    renderSectionHeader,
    renderEmptyComponent,
    keyExtractor,
  };
};

const Dashboard = () => {
  const {
    colors,
    themedStyles,
    data,
    renderItem,
    renderSectionHeader,
    renderEmptyComponent,
    keyExtractor,
  } = useDashboard();
  return (
    <SafeAreaView style={themedStyles.mainContainer}>
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
      >
        <Plus />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.searchFloating,
          { backgroundColor: colors.primary, shadowColor: colors.shadow },
        ]}
      >
        <Search />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Dashboard;
