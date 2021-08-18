import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';
import { Routes, StaticData, Strings } from '../../../constants';
import { styles } from './JoinGameStyle';
import { cloneDeep } from 'lodash';
import { Colors, moderateScale } from '../../../theme';

const { Back, Football, Chat } = SVG;

const myOverall = 96;

const useJoinGame = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const navigation = useNavigation();
  const [overallTeamA, setOverallTeamA] = useState(0);
  const [overallTeamB, setOverallTeamB] = useState(0);
  const [arrayTeamA, setArrayTeamA] = useState([]);
  const [arrayTeamB, setArrayTeamB] = useState([]);
  const [joinedTeam, setJoinedTeam] = useState(null);

  useEffect(() => {
    const teamAData = cloneDeep(StaticData.joinGameData.teamAData);
    const teamBData = cloneDeep(StaticData.joinGameData.teamBData);
    let overallA = 0;
    let overallB = 0;
    teamAData.map((item) => {
      overallA += item.overall;
    });
    teamBData.map((item) => {
      overallB += item.overall;
    });
    setOverallTeamA(Math.round(overallA / teamAData.length));
    setOverallTeamB(Math.round(overallB / teamBData.length));
    setArrayTeamA(teamAData);
    setArrayTeamB(teamBData);
  }, []);

  useEffect(() => {
    let overallA = 0;
    let finalOverallA = 0;
    let overallB = 0;
    let finalOverallB = 0;
    arrayTeamA.map((item) => {
      overallA += item.overall;
    });
    finalOverallA = Math.round(overallA / arrayTeamA.length);
    arrayTeamB.map((item) => {
      overallB += item.overall;
    });
    finalOverallB = Math.round(overallB / arrayTeamB.length);
    if (joinedTeam === Strings.teamA) {
      finalOverallA = Math.round((finalOverallA + myOverall) / 2);
    } else if (joinedTeam === Strings.teamB) {
      finalOverallB = Math.round((finalOverallB + myOverall) / 2);
    }
    setOverallTeamA(finalOverallA);
    setOverallTeamB(finalOverallB);
  }, [arrayTeamA, arrayTeamB, joinedTeam]);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressJoinTeam = useCallback((team) => {
    setJoinedTeam(team);
  }, []);

  const renderItemTeamA = useCallback(
    ({ item }) => {
      return (
        <View style={themedStyles.joinItemContainer}>
          <View>
            <View style={themedStyles.joinItemImageContainer}>
              <Image
                style={themedStyles.dashItemImage}
                source={item.profilePic}
              />
            </View>
            <View style={themedStyles.joinItemOverallContainer}>
              <Text style={themedStyles.joinItemOverallText}>
                {item.overall}
              </Text>
            </View>
          </View>
          <View style={themedStyles.joinItemTextContainer}>
            <Text style={themedStyles.joinItemName}>{item.fullName}</Text>
            <Text style={themedStyles.joinItemRole}>{item.role}</Text>
          </View>
        </View>
      );
    },
    [
      themedStyles.dashItemImage,
      themedStyles.joinItemContainer,
      themedStyles.joinItemImageContainer,
      themedStyles.joinItemName,
      themedStyles.joinItemOverallContainer,
      themedStyles.joinItemOverallText,
      themedStyles.joinItemRole,
      themedStyles.joinItemTextContainer,
    ]
  );

  const renderFooterTeamA = useCallback(() => {
    return (
      <TouchableOpacity
        style={themedStyles.joinItemContainer}
        onPress={() =>
          onPressJoinTeam(joinedTeam === Strings.teamA ? null : Strings.teamA)
        }
      >
        <View style={themedStyles.joinItemImageContainer}>
          <Football
            width={moderateScale(30)}
            height={moderateScale(30)}
            fill={colors.primary}
          />
        </View>
        <View style={themedStyles.joinItemTextContainer}>
          <Text style={themedStyles.joinItemName}>
            {joinedTeam === Strings.teamA ? Strings.unJoin : Strings.join}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, [
    themedStyles.joinItemContainer,
    themedStyles.joinItemImageContainer,
    themedStyles.joinItemTextContainer,
    themedStyles.joinItemName,
    joinedTeam,
    onPressJoinTeam,
  ]);

  const keyExtractorTeamA = useCallback((item) => item.id.toString(), []);

  const renderItemTeamB = useCallback(
    ({ item }) => {
      return (
        <View style={themedStyles.joinItemContainer}>
          <View>
            <View style={themedStyles.joinItemImageContainer}>
              <Image
                style={themedStyles.dashItemImage}
                source={item.profilePic}
              />
            </View>
            <View style={themedStyles.joinItemOverallContainer}>
              <Text style={themedStyles.joinItemOverallText}>
                {item.overall}
              </Text>
            </View>
          </View>
          <View style={themedStyles.joinItemTextContainer}>
            <Text style={themedStyles.joinItemName}>{item.fullName}</Text>
            <Text style={themedStyles.joinItemRole}>{item.role}</Text>
          </View>
        </View>
      );
    },
    [
      themedStyles.dashItemImage,
      themedStyles.joinItemContainer,
      themedStyles.joinItemImageContainer,
      themedStyles.joinItemName,
      themedStyles.joinItemOverallContainer,
      themedStyles.joinItemOverallText,
      themedStyles.joinItemRole,
      themedStyles.joinItemTextContainer,
    ]
  );

  const renderFooterTeamB = useCallback(() => {
    return (
      <TouchableOpacity
        style={themedStyles.joinItemContainer}
        onPress={() =>
          onPressJoinTeam(joinedTeam === Strings.teamB ? null : Strings.teamB)
        }
      >
        <View style={themedStyles.joinItemImageContainer}>
          <Football
            width={moderateScale(30)}
            height={moderateScale(30)}
            fill={colors.primary}
          />
        </View>
        <View style={themedStyles.joinItemTextContainer}>
          <Text style={themedStyles.joinItemName}>
            {joinedTeam === Strings.teamB ? Strings.unJoin : Strings.join}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }, [
    themedStyles.joinItemContainer,
    themedStyles.joinItemImageContainer,
    themedStyles.joinItemTextContainer,
    themedStyles.joinItemName,
    joinedTeam,
    onPressJoinTeam,
  ]);

  const keyExtractorTeamB = useCallback((item) => item.id.toString(), []);

  const onPressChat = useCallback(() => {
    navigation.navigate(Routes.Chat);
  }, [navigation]);

  return {
    colors,
    themedStyles,
    statusBarStyle,
    onPressBack,
    overallTeamA,
    overallTeamB,
    arrayTeamA,
    arrayTeamB,
    renderItemTeamA,
    keyExtractorTeamA,
    renderFooterTeamA,
    renderItemTeamB,
    keyExtractorTeamB,
    renderFooterTeamB,
    onPressChat,
  };
};

const JoinGame = () => {
  const {
    colors,
    themedStyles,
    statusBarStyle,
    onPressBack,
    overallTeamA,
    overallTeamB,
    arrayTeamA,
    arrayTeamB,
    renderItemTeamA,
    keyExtractorTeamA,
    renderFooterTeamA,
    renderItemTeamB,
    keyExtractorTeamB,
    renderFooterTeamB,
    onPressChat,
  } = useJoinGame();
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
        <Text style={themedStyles.headerTitle}>{Strings.joinGame}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.itemHeaderContainer}>
          <View style={styles.itemHeaderTextContainer}>
            <Text style={themedStyles.joinTeamTitle}>{Strings.teamA}</Text>
            <View style={themedStyles.joinTeamOverallContainer}>
              <Text style={themedStyles.joinTeamOverallText}>
                {Math.ceil(overallTeamA)}
              </Text>
            </View>
          </View>
          <Text style={themedStyles.joinTeamVSText}>{Strings.vs}</Text>
          <View style={styles.itemHeaderTextContainer}>
            <Text style={themedStyles.joinTeamTitle}>{Strings.teamB}</Text>
            <View style={themedStyles.joinTeamOverallContainer}>
              <Text style={themedStyles.joinTeamOverallText}>
                {Math.ceil(overallTeamB)}
              </Text>
            </View>
          </View>
        </View>
        <View style={themedStyles.joinBorder} />
        <View style={styles.listContainer}>
          <View style={styles.flexContainer}>
            <FlatList
              scrollEnabled={false}
              data={arrayTeamA}
              renderItem={renderItemTeamA}
              keyExtractor={keyExtractorTeamA}
              ListFooterComponent={renderFooterTeamA()}
            />
          </View>
          <View style={styles.gap} />
          <View style={styles.flexContainer}>
            <FlatList
              scrollEnabled={false}
              data={arrayTeamB}
              renderItem={renderItemTeamB}
              keyExtractor={keyExtractorTeamB}
              ListFooterComponent={renderFooterTeamB()}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.smallButtonContainer}>
        <TouchableOpacity
          style={themedStyles.iconButtonStyle}
          onPress={onPressChat}
        >
          <View style={styles.iconButton}>
            <Chat fill={Colors.white} />
          </View>
          <Text style={themedStyles.iconButtonText}>{Strings.chat}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default JoinGame;
