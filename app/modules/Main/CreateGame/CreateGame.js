import React, { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { styles } from './CreateGameStyle';
import { useThemedStyles } from '../../../hooks';
import { SVG, Images } from '../../../assets';
import { AppConstants, FixedData, Strings } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { Colors, moderateScale, scale } from '../../../theme';
import {
  DatePicker,
  PitchView,
  ProgressView,
  SquareCheckBox,
  SquareCheckBoxWI,
} from '../../../components';
import RNPickerSelect from 'react-native-picker-select';
import moment from 'moment';

const { Back, Search, Bell, DropDown } = SVG;

const useCreateGame = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPitch, setSelectedPitch] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedGameType, setSelectedGameType] = useState(null);
  const progressViewRef = useRef(null);
  const datePickerRef = useRef(null);
  const timePickerRef = useRef(null);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressSearch = useCallback(() => {}, []);

  const onPressBell = useCallback(() => {}, []);

  const onPressProfile = useCallback(() => {}, []);

  const onChangeIndex = useCallback((currentIndex) => {
    setActiveIndex(currentIndex);
  }, []);

  const onCheckChange = useCallback((checkedItem) => {
    setSelectedUser(checkedItem);
  }, []);

  const onChangePitch = useCallback((checkedItem) => {
    setSelectedPitch(checkedItem);
  }, []);

  const onChangeSelectLocation = useCallback((value) => {
    setSelectedLocation(value);
  }, []);

  const onPressDatePicker = useCallback(() => {
    datePickerRef?.current?.onPressDate();
  }, [datePickerRef]);

  const onChangeDate = useCallback((date) => {
    setSelectedDate(date);
  }, []);

  const onPressTimePicker = useCallback(() => {
    timePickerRef?.current?.onPressDate();
  }, []);

  const onChangeTime = useCallback((time) => {
    setSelectedTime(time);
  }, []);

  const onPressPrice = useCallback((price) => {
    setSelectedPrice(price.toString());
  }, []);

  const onChangePrice = useCallback((value) => {
    setSelectedPrice(value);
  }, []);

  const onCheckChangeGame = useCallback((checkedItem) => {
    setSelectedGameType(checkedItem);
  }, []);

  const onPressPublishNow = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onPressNext = useCallback(() => {
    progressViewRef?.current?.onPressNext();
  }, [progressViewRef]);

  const onPressPrevious = useCallback(() => {
    progressViewRef?.current?.onPressPrevious();
  }, [progressViewRef]);

  return {
    progressViewRef,
    datePickerRef,
    timePickerRef,
    colors,
    themedStyles,
    statusBarStyle,
    activeIndex,
    selectedUser,
    selectedPitch,
    selectedLocation,
    selectedDate,
    selectedTime,
    selectedPrice,
    selectedGameType,
    onPressBack,
    onPressSearch,
    onPressBell,
    onPressProfile,
    onChangeIndex,
    onCheckChange,
    onChangePitch,
    onChangeSelectLocation,
    onPressDatePicker,
    onChangeDate,
    onPressTimePicker,
    onChangeTime,
    onPressPrice,
    onChangePrice,
    onCheckChangeGame,
    onPressPublishNow,
    onPressNext,
    onPressPrevious,
  };
};

const CreateGame = () => {
  const {
    progressViewRef,
    datePickerRef,
    timePickerRef,
    colors,
    themedStyles,
    statusBarStyle,
    activeIndex,
    selectedUser,
    selectedPitch,
    selectedLocation,
    selectedDate,
    selectedTime,
    selectedPrice,
    selectedGameType,
    onPressBack,
    onPressSearch,
    onPressBell,
    onPressProfile,
    onChangeIndex,
    onCheckChange,
    onChangePitch,
    onChangeSelectLocation,
    onPressDatePicker,
    onChangeDate,
    onPressTimePicker,
    onChangeTime,
    onPressPrice,
    onChangePrice,
    onCheckChangeGame,
    onPressPublishNow,
    onPressNext,
    onPressPrevious,
  } = useCreateGame();

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
        <Text style={themedStyles.headerTitle}>{Strings.createGame}</Text>
        <View style={themedStyles.headerRightContainer}>
          <TouchableOpacity
            style={themedStyles.headerIconMarginStyle}
            onPress={onPressSearch}
          >
            <Search
              width={moderateScale(28)}
              height={moderateScale(28)}
              stroke={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={themedStyles.headerIconMarginStyle}
            onPress={onPressBell}
          >
            <Bell stroke={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressProfile}>
            <View style={themedStyles.headerProfileImageContainer}>
              <Image
                style={themedStyles.headerProfileImage}
                source={Images.useImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView bounces={false}>
        <ProgressView
          ref={progressViewRef}
          style={styles.tabContainer}
          onChangeIndex={onChangeIndex}
        />
        {activeIndex === 0 && (
          <View>
            <Text style={themedStyles.createGameTitleText}>
              {Strings.youAre}
            </Text>
            <SquareCheckBox
              selectedUser={selectedUser}
              onCheckChange={onCheckChange}
            />
            <Text style={themedStyles.createGameTitleText}>
              {Strings.typePitch}
            </Text>
            <PitchView
              selectedPitch={selectedPitch}
              onChangeView={onChangePitch}
            />
          </View>
        )}
        {activeIndex === 1 && (
          <View>
            <Text style={themedStyles.createGameTitleText}>
              {Strings.setLocation}
            </Text>
            <RNPickerSelect
              items={FixedData.locationData}
              onValueChange={onChangeSelectLocation}
              style={{
                viewContainer: themedStyles.inputView,
                inputIOS: !!selectedLocation
                  ? [themedStyles.inputViewText, styles.inputViewTextPicker]
                  : [
                      themedStyles.inputViewInactiveText,
                      styles.inputViewTextPicker,
                    ],
                inputAndroid: !!selectedLocation
                  ? [themedStyles.inputViewText, styles.inputViewTextPicker]
                  : [
                      themedStyles.inputViewInactiveText,
                      styles.inputViewTextPicker,
                    ],
                placeholder: themedStyles.inputViewInactiveText,
                iconContainer: styles.dropDownContainer,
              }}
              Icon={() => {
                return (
                  <DropDown
                    width={moderateScale(30)}
                    height={moderateScale(30)}
                    fill={colors.inactive2}
                  />
                );
              }}
            ></RNPickerSelect>
            <Text style={themedStyles.createGameTitleText}>
              {Strings.setDate}
            </Text>
            <TouchableOpacity
              style={[themedStyles.inputView, styles.inputView]}
              onPress={onPressDatePicker}
            >
              <Text
                style={
                  selectedDate && selectedDate !== ''
                    ? themedStyles.inputViewText
                    : themedStyles.inputViewInactiveText
                }
              >
                {selectedDate && selectedDate !== ''
                  ? moment(selectedDate, AppConstants.dateFormat).format(
                      AppConstants.dateFormatDisplay
                    )
                  : Strings.setDate}
              </Text>
            </TouchableOpacity>
            <DatePicker
              ref={datePickerRef}
              style={styles.datePicker}
              mode="date"
              androidMode="spinner"
              placeholder={Strings.setDate}
              format={AppConstants.dateFormat}
              minDate={moment().format(AppConstants.dateFormat)}
              confirmBtnText={Strings.confirm}
              cancelBtnText={Strings.cancel}
              customStyles={{
                datePickerCon: {
                  backgroundColor: colors.mainBackground,
                },
                dateText: themedStyles.datePickerDateTextStyle,
                placeholderText:
                  themedStyles.datePickerDatePlaceholderTextStyle,
                btnTextConfirm: themedStyles.datePickerBtnTextStyle,
                btnTextCancel: themedStyles.datePickerBtnTextStyle,
              }}
              onDateChange={(date) => {
                onChangeDate(date);
              }}
            />
            <Text style={themedStyles.createGameTitleText}>
              {Strings.setTime}
            </Text>
            <TouchableOpacity
              style={[themedStyles.inputView, styles.inputView]}
              onPress={onPressTimePicker}
            >
              <Text
                style={
                  selectedTime && selectedTime !== ''
                    ? themedStyles.inputViewText
                    : themedStyles.inputViewInactiveText
                }
              >
                {selectedTime && selectedTime !== ''
                  ? moment(selectedTime, AppConstants.timeFormat).format(
                      AppConstants.timeFormatDisplay
                    )
                  : Strings.setTime}
              </Text>
            </TouchableOpacity>
            <DatePicker
              ref={timePickerRef}
              style={styles.datePicker}
              mode="time"
              androidMode="spinner"
              placeholder={Strings.setTime}
              format={AppConstants.timeFormat}
              confirmBtnText={Strings.confirm}
              cancelBtnText={Strings.cancel}
              customStyles={{
                datePickerCon: {
                  backgroundColor: colors.mainBackground,
                },
                dateText: themedStyles.datePickerDateTextStyle,
                placeholderText:
                  themedStyles.datePickerDatePlaceholderTextStyle,
                btnTextConfirm: themedStyles.datePickerBtnTextStyle,
                btnTextCancel: themedStyles.datePickerBtnTextStyle,
              }}
              onDateChange={(date) => {
                onChangeTime(date);
              }}
            />
            <Text style={themedStyles.createGameTitleText}>
              {Strings.setPrice}
            </Text>
            <View style={styles.priceContainer}>
              <TouchableOpacity
                style={[
                  styles.priceSelectContainer,
                  { backgroundColor: colors.inactive3 },
                ]}
                onPress={() => onPressPrice(5)}
              >
                <Text style={themedStyles.priceTextStyle}>$5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.priceSelectContainer,
                  { backgroundColor: colors.inactive3 },
                ]}
                onPress={() => onPressPrice(10)}
              >
                <Text style={themedStyles.priceTextStyle}>$10</Text>
              </TouchableOpacity>
              <View
                style={[
                  themedStyles.priceInputContainer,
                  {
                    borderColor:
                      selectedPrice !== '' ? colors.primary : colors.inactive,
                  },
                ]}
              >
                <Text
                  style={[themedStyles.priceTextStyle, styles.priceInputIcon]}
                >
                  $
                </Text>
                <TextInput
                  style={themedStyles.priceInput}
                  underlineColorAndroid={Colors.transparent}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  value={selectedPrice}
                  onChangeText={onChangePrice}
                />
              </View>
              <Text
                style={[
                  themedStyles.priceTextStyle,
                  { color: colors.primary, marginLeft: scale(5) },
                ]}
              >
                {Strings.perPerson}
              </Text>
            </View>
          </View>
        )}
        {activeIndex === 2 && (
          <View>
            {selectedUser && (
              <View style={[styles.flexRowContainer, styles.descriptionStyle]}>
                <selectedUser.icon />
                <Text
                  style={[themedStyles.inputViewText, styles.descriptionRow]}
                >
                  {selectedUser.title}
                </Text>
              </View>
            )}
            {selectedPitch && (
              <Text
                style={[themedStyles.inputViewText, styles.descriptionStyle]}
              >
                {`${selectedPitch.value} ${Strings.playerPerTeam}`}
              </Text>
            )}
            {selectedLocation && (
              <Text
                style={[themedStyles.inputViewText, styles.descriptionStyle]}
              >
                {selectedLocation}
              </Text>
            )}
            {selectedDate && (
              <Text
                style={[themedStyles.inputViewText, styles.descriptionStyle]}
              >
                {moment(selectedDate, AppConstants.dateFormat).format(
                  AppConstants.dateFormatDisplay
                )}
              </Text>
            )}
            {selectedTime && (
              <Text
                style={[themedStyles.inputViewText, styles.descriptionStyle]}
              >
                {moment(selectedTime, AppConstants.timeFormat).format(
                  AppConstants.timeFormatDisplay
                )}
              </Text>
            )}
            {selectedPrice !== '' && (
              <Text
                style={[themedStyles.inputViewText, styles.descriptionStyle]}
              >
                {`$${selectedPrice} ${Strings.perPerson}`}
              </Text>
            )}
            <Text style={themedStyles.createGameTitleText}>
              {Strings.setGameAs}
            </Text>
            <SquareCheckBoxWI
              selectedValue={selectedGameType}
              onCheckChange={onCheckChangeGame}
            />
          </View>
        )}
      </ScrollView>
      <View style={themedStyles.buttonContainer}>
        <TouchableOpacity
          style={
            activeIndex === 0
              ? themedStyles.primaryButtonInactiveStyle
              : themedStyles.secondaryButtonStyle
          }
          disabled={activeIndex === 0}
          onPress={onPressPrevious}
        >
          <Text
            style={
              activeIndex === 0
                ? themedStyles.primaryButtonInactiveText
                : themedStyles.secondaryButtonText
            }
          >
            {Strings.previous}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={themedStyles.primaryButtonStyle}
          onPress={activeIndex === 2 ? onPressPublishNow : onPressNext}
        >
          <Text style={themedStyles.primaryButtonText}>
            {activeIndex === 2 ? Strings.publishNow : Strings.continue}
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
      />
    </SafeAreaView>
  );
};

export default CreateGame;
