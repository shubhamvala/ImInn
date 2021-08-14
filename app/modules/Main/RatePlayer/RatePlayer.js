import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import { cloneDeep } from 'lodash';
import { AirbnbRating } from 'react-native-ratings';
import { StaticData, Strings } from '../../../constants';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';
import { styles } from './RatePlayerStyle';
import { Colors } from '../../../theme';

const { Back, ChampionCup } = SVG;

const useRatePlayer = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const navigation = useNavigation();
  const [avgRateTeamA, setAvgRateTeamA] = useState(0);
  const [avgRateTeamB, setAvgRateTeamB] = useState(0);
  const [arrayTeamA, setArrayTeamA] = useState([]);
  const [arrayTeamB, setArrayTeamB] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(Strings.teamA);

  useEffect(() => {
    const teamAData = cloneDeep(StaticData.joinGameData.teamAData);
    const teamBData = cloneDeep(StaticData.joinGameData.teamBData);
    let avgRateA = 0;
    let avgRateB = 0;
    teamAData.map((item) => {
      avgRateA += item.rating;
    });
    teamBData.map((item) => {
      avgRateB += item.rating;
    });
    setAvgRateTeamA(Math.round(avgRateA / teamAData.length), 1);
    setAvgRateTeamB(Math.round(avgRateB / teamBData.length), 1);
    setArrayTeamA(teamAData);
    setArrayTeamB(teamBData);
  }, []);

  useEffect(() => {
    let avgRateA = 0;
    let avgRateB = 0;
    arrayTeamA.map((item) => {
      avgRateA += item.rating;
    });
    arrayTeamB.map((item) => {
      avgRateB += item.rating;
    });
    setAvgRateTeamA(Math.round(avgRateA / arrayTeamA.length), 1);
    setAvgRateTeamB(Math.round(avgRateB / arrayTeamB.length), 1);
  }, [arrayTeamA, arrayTeamB]);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressSelectTeam = useCallback((team) => {
    setSelectedTeam(team);
  }, []);

  const onPressSetBest = useCallback(
    (itemSel) => {
      if (selectedTeam === Strings.teamA) {
        const teamAData = cloneDeep(arrayTeamA);
        teamAData.map((item) => {
          if (item.id === itemSel.id) {
            item.isBest = !itemSel.isBest;
          } else {
            item.isBest = false;
          }
        });
        setArrayTeamA(teamAData);
      } else {
        const teamBData = cloneDeep(arrayTeamB);
        teamBData.map((item) => {
          if (item.id === itemSel.id) {
            item.isBest = !itemSel.isBest;
          } else {
            item.isBest = false;
          }
        });
        setArrayTeamB(teamBData);
      }
    },
    [selectedTeam, arrayTeamA, arrayTeamB]
  );

  const onFinishRating = useCallback(
    (itemSel, rating) => {
      if (selectedTeam === Strings.teamA) {
        const teamAData = cloneDeep(arrayTeamA);
        teamAData.map((item) => {
          if (item.id === itemSel.id) {
            item.rating = rating;
          }
        });
        setArrayTeamA(teamAData);
      } else {
        const teamBData = cloneDeep(arrayTeamB);
        teamBData.map((item) => {
          if (item.id === itemSel.id) {
            item.rating = rating;
          }
        });
        setArrayTeamB(teamBData);
      }
    },
    [selectedTeam, arrayTeamA, arrayTeamB]
  );

  const renderItemTeam = useCallback(
    ({ item }) => {
      return (
        <View style={themedStyles.joinItemContainer}>
          <View
            style={[
              themedStyles.joinItemImageContainer,
              styles.itemImageContainer,
            ]}
          >
            <Image
              style={themedStyles.dashItemImage}
              source={item.profilePic}
            />
          </View>
          <View
            style={[
              themedStyles.joinItemTextContainer,
              styles.itemTextContainer,
            ]}
          >
            <Text style={themedStyles.joinItemName}>{item.fullName}</Text>
            <Text style={themedStyles.joinItemRole}>{item.role}</Text>
            <AirbnbRating
              ratingContainerStyle={themedStyles.rateItemRatingContainer}
              count={5}
              defaultRating={item.rating}
              showRating={false}
              size={20}
              onFinishRating={(rating) => onFinishRating(item, rating)}
            />
          </View>
          <TouchableOpacity
            style={[
              themedStyles.rateItemChamContainer,
              item.isBest && themedStyles.rateItemChamContainerActive,
            ]}
            onPress={() => onPressSetBest(item)}
          >
            <ChampionCup
              fill={item.isBest ? Colors.white : colors.inactive}
              stroke={item.isBest ? Colors.white : colors.inactive}
            />
          </TouchableOpacity>
        </View>
      );
    },
    [
      themedStyles.joinItemContainer,
      themedStyles.joinItemImageContainer,
      themedStyles.dashItemImage,
      themedStyles.joinItemTextContainer,
      themedStyles.joinItemName,
      themedStyles.joinItemRole,
      themedStyles.rateItemChamContainer,
      themedStyles.rateItemChamContainerActive,
      themedStyles.rateItemRatingContainer,
      colors.inactive,
      onFinishRating,
      onPressSetBest,
    ]
  );

  const keyExtractorTeam = useCallback((item) => item.id.toString(), []);

  return {
    colors,
    themedStyles,
    statusBarStyle,
    avgRateTeamA,
    avgRateTeamB,
    arrayTeamA,
    arrayTeamB,
    selectedTeam,
    setSelectedTeam,
    onPressBack,
    onPressSelectTeam,
    renderItemTeam,
    keyExtractorTeam,
  };
};

const RatePlayer = () => {
  const {
    colors,
    themedStyles,
    statusBarStyle,
    avgRateTeamA,
    avgRateTeamB,
    arrayTeamA,
    arrayTeamB,
    selectedTeam,
    setSelectedTeam,
    onPressBack,
    onPressSelectTeam,
    renderItemTeam,
    keyExtractorTeam,
  } = useRatePlayer();
  return (
    <SafeAreaView style={themedStyles.detailContainer}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={colors.background}
      />
      <View style={themedStyles.headerContainer}>
        <TouchableOpacity onPress={onPressBack}>
          <Back stroke={colors.inactive2} />
        </TouchableOpacity>
        <Text style={themedStyles.headerTitle}>{Strings.ratePlayer}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.itemHeaderContainer}>
          <View
            style={[
              styles.itemHeaderTextContainer,
              selectedTeam === Strings.teamB && styles.disableContainer,
            ]}
          >
            <TouchableOpacity
              style={styles.centerContainer}
              disabled={selectedTeam === Strings.teamA}
              onPress={() => onPressSelectTeam(Strings.teamA)}
            >
              <Text style={themedStyles.joinTeamTitle}>{Strings.teamA}</Text>
              <View style={themedStyles.joinTeamOverallContainer}>
                <Text style={themedStyles.joinTeamOverallText}>
                  {avgRateTeamA}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={themedStyles.joinTeamVSText}>{Strings.vs}</Text>
          <View
            style={[
              styles.itemHeaderTextContainer,
              selectedTeam === Strings.teamA && styles.disableContainer,
            ]}
          >
            <TouchableOpacity
              style={styles.centerContainer}
              disabled={selectedTeam === Strings.teamB}
              onPress={() => onPressSelectTeam(Strings.teamB)}
            >
              <Text style={themedStyles.joinTeamTitle}>{Strings.teamB}</Text>
              <View style={themedStyles.joinTeamOverallContainer}>
                <Text style={themedStyles.joinTeamOverallText}>
                  {avgRateTeamB}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={themedStyles.joinBorder} />
        <FlatList
          scrollEnabled={false}
          data={selectedTeam === Strings.teamA ? arrayTeamA : arrayTeamB}
          renderItem={renderItemTeam}
          keyExtractor={keyExtractorTeam}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RatePlayer;
