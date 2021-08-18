import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  SectionList,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import { styles } from './DashboardStyle';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';
import { Routes, StaticData, Strings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../../theme';

const {
  Plus,
  Search,
  EmptyDashboard,
  Award,
  AwardLight,
  Bell,
  FieldIcon,
  Football,
} = SVG;

const useDashboard = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const [data, setData] = useState(StaticData.gameData);
  const navigation = useNavigation();

  const onPressMoreDetail = useCallback(() => {
    navigation.navigate(Routes.RatePlayer);
  }, [navigation]);

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

  const renderYourGame = useCallback(
    (item) => {
      return (
        <View style={themedStyles.dashItemContainer}>
          <View style={themedStyles.dashItemInnerContainer}>
            <View style={themedStyles.dashItemImageContainer}>
              <Football fill={colors.primary} />
            </View>
            <View style={themedStyles.dashItemContentContainer}>
              <Text
                style={themedStyles.dashItemContentText}
              >{`${Strings.teamA} vs ${Strings.teamB}`}</Text>
              <View style={themedStyles.dashItemRoundContainer}>
                <Text style={themedStyles.dashItemRoundText}>
                  {item.isJoined ? Strings.joined : ''}
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onPressMoreDetail}>
            <View style={themedStyles.dashItemButtonContainer}>
              <Text style={themedStyles.dashItemButtonText}>
                {Strings.moreDetails}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [
      colors.primary,
      onPressMoreDetail,
      themedStyles.dashItemButtonContainer,
      themedStyles.dashItemButtonText,
      themedStyles.dashItemContainer,
      themedStyles.dashItemContentContainer,
      themedStyles.dashItemContentText,
      themedStyles.dashItemImageContainer,
      themedStyles.dashItemInnerContainer,
      themedStyles.dashItemRoundContainer,
      themedStyles.dashItemRoundText,
    ]
  );

  const renderUserListItem = useCallback(
    ({ itemUser, indexUser }, totalUser) => {
      if (indexUser > 5) {
        return null;
      } else {
        return (
          <View
            style={[
              themedStyles.dashItemUserListContainer,
              indexUser !== 0 && themedStyles.dashItemUserListMargin,
              indexUser > 4 && themedStyles.dashItemUserListMoreContainer,
              { zIndex: indexUser },
            ]}
          >
            {indexUser <= 4 ? (
              <Image
                style={themedStyles.dashItemImage}
                source={itemUser.profilePic}
              />
            ) : (
              <Text style={themedStyles.dashItemUserMoreText}>{`+${
                totalUser - indexUser
              }`}</Text>
            )}
          </View>
        );
      }
    },
    [
      themedStyles.dashItemImage,
      themedStyles.dashItemUserListContainer,
      themedStyles.dashItemUserListMargin,
      themedStyles.dashItemUserListMoreContainer,
      themedStyles.dashItemUserMoreText,
    ]
  );

  const keyExtractorUser = useCallback((item) => item.id.toString(), []);

  const onPressJoinNow = useCallback(() => {
    navigation.navigate(Routes.JoinGame);
  }, [navigation]);

  const renderRecGame = useCallback(
    (item) => {
      return (
        <View style={themedStyles.dashItemContainer}>
          <View style={themedStyles.dashItemInnerContainer}>
            <View style={themedStyles.dashItemImageContainer}>
              <Football fill={colors.primary} />
            </View>
            <View style={themedStyles.dashItemContentContainer}>
              <View style={themedStyles.dashItemContextTextContainer}>
                <Text
                  style={themedStyles.dashItemContentText}
                >{`${Strings.teamA} vs ${Strings.teamB}`}</Text>
                <View style={themedStyles.dashItemRoundSmallContainer}>
                  <Text style={themedStyles.dashItemRoundText}>
                    {item.availablePlace}
                  </Text>
                </View>
              </View>
              <Text style={themedStyles.dashItemTimeText}>
                {`${item.time}, ${item.location}`}
              </Text>
              <View style={themedStyles.dashItemUserListMainContainer}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  data={item.users}
                  renderItem={({ item: itemUser, index: indexUser }) =>
                    renderUserListItem(
                      { itemUser, indexUser },
                      item?.users?.length
                    )
                  }
                  keyExtractor={keyExtractorUser}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onPressJoinNow}>
            <View style={themedStyles.dashItemButtonContainer}>
              <Text style={themedStyles.dashItemButtonText}>
                {Strings.joinNow}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    },
    [
      themedStyles.dashItemContainer,
      themedStyles.dashItemInnerContainer,
      themedStyles.dashItemImageContainer,
      themedStyles.dashItemContentContainer,
      themedStyles.dashItemContextTextContainer,
      themedStyles.dashItemContentText,
      themedStyles.dashItemRoundSmallContainer,
      themedStyles.dashItemRoundText,
      themedStyles.dashItemTimeText,
      themedStyles.dashItemUserListMainContainer,
      themedStyles.dashItemButtonContainer,
      themedStyles.dashItemButtonText,
      colors.primary,
      keyExtractorUser,
      onPressJoinNow,
      renderUserListItem,
    ]
  );

  const renderItem = useCallback(
    ({ item, index, section }) => {
      if (section.title === Strings.yourGames) {
        return renderYourGame(item, index);
      } else if (section.title === Strings.recommendation) {
        return renderRecGame(item, index);
      } else {
        return null;
      }
    },
    [renderYourGame, renderRecGame]
  );

  const renderSectionHeader = useCallback(
    ({ section }) => {
      return (
        <View style={themedStyles.listHeaderContainer}>
          <FieldIcon stroke={colors.primary} />
          <Text style={themedStyles.listHeaderTitle}>{section.title}</Text>
          {section.title === Strings.recommendation && (
            <Text style={themedStyles.listHeaderSubTitle}>
              {Strings.nearby}
            </Text>
          )}
        </View>
      );
    },
    [
      colors.primary,
      themedStyles.listHeaderContainer,
      themedStyles.listHeaderSubTitle,
      themedStyles.listHeaderTitle,
    ]
  );

  const renderListFooter = useCallback(() => {
    return <View style={themedStyles.dashItemFooterContainer}></View>;
  }, [themedStyles.dashItemFooterContainer]);

  const keyExtractor = useCallback((item, index) => {
    return item + index;
  }, []);

  const onAddNewGame = useCallback((item) => {}, []);

  const onPressBell = useCallback(() => {}, []);

  const onPressCreate = useCallback(() => {
    navigation.navigate(Routes.CreateGame, { onAddNewGame });
  }, [navigation, onAddNewGame]);

  const onPressSearch = useCallback(() => {}, []);

  return {
    colors,
    themedStyles,
    statusBarStyle,
    data,
    renderItem,
    renderSectionHeader,
    renderEmptyComponent,
    renderListFooter,
    keyExtractor,
    onPressBell,
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
    renderListFooter,
    keyExtractor,
    onPressBell,
    onPressCreate,
    onPressSearch,
  } = useDashboard();
  return (
    <SafeAreaView style={themedStyles.mainContainer}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={colors.mainBackground}
      />
      <View style={styles.headingContainer}>
        <Text style={themedStyles.mainHeaderTitle}>{Strings.games}</Text>
        <View
          style={[
            styles.roundContainer,
            { backgroundColor: colors.primaryOpacity10 },
          ]}
        >
          <Award />
          <Text style={[styles.successTitle, { color: colors.primary }]}>
            {Strings.rokie}
          </Text>
        </View>
        <View
          style={[
            styles.roundContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <AwardLight stroke={colors.primary} />
          <Text
            style={[styles.normalTitle, { color: colors.textPrimaryOpacity80 }]}
          >
            0
          </Text>
        </View>
        <TouchableOpacity onPress={onPressBell}>
          <Bell stroke={colors.primary} />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={data}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={renderEmptyComponent}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={renderListFooter()}
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
