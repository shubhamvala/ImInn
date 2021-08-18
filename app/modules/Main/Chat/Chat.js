import React, { useCallback, useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  GiftedChat,
  Bubble,
  MessageText,
  Time,
  Composer,
  Send,
} from 'react-native-gifted-chat';
import { Strings } from '../../../constants';
import { useThemedStyles } from '../../../hooks';
import { SVG } from '../../../assets';

const { Back } = SVG;

const useChat = () => {
  const { colors, themedStyles, statusBarStyle } = useThemedStyles();
  const navigation = useNavigation();
  const [listMessages, setListMessages] = useState([]);

  useEffect(() => {
    setListMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onSend = useCallback((messages = []) => {
    setListMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderBubble = useCallback(
    (props) => {
      return (
        <Bubble
          {...props}
          wrapperStyle={{
            left: themedStyles.chatLeftBubble,
            right: themedStyles.chatRightBubble,
          }}
        />
      );
    },
    [themedStyles.chatLeftBubble, themedStyles.chatRightBubble]
  );

  const renderMessageText = useCallback(
    (props) => {
      return (
        <MessageText
          {...props}
          textStyle={{
            left: themedStyles.chatLeftTextStyle,
            right: themedStyles.chatRightTextStyle,
          }}
        />
      );
    },
    [themedStyles.chatLeftTextStyle, themedStyles.chatRightTextStyle]
  );

  const renderTime = useCallback(
    (props) => {
      return <Time {...props} timeTextStyle={themedStyles.chatTimeTextStyle} />;
    },
    [themedStyles.chatTimeTextStyle]
  );

  const renderComposer = useCallback(
    (props) => {
      return (
        <Composer
          {...props}
          textInputStyle={themedStyles.chatSendMessageInput}
        />
      );
    },
    [themedStyles.chatSendMessageInput]
  );

  const renderSend = useCallback(
    (props) => {
      return <Send {...props} textStyle={themedStyles.chatSendMessageText} />;
    },
    [themedStyles.chatSendMessageText]
  );

  return {
    colors,
    themedStyles,
    statusBarStyle,
    listMessages,
    onPressBack,
    onSend,
    renderBubble,
    renderMessageText,
    renderTime,
    renderComposer,
    renderSend,
  };
};

const Chat = () => {
  const {
    colors,
    themedStyles,
    statusBarStyle,
    listMessages,
    onPressBack,
    onSend,
    renderBubble,
    renderMessageText,
    renderTime,
    renderComposer,
    renderSend,
  } = useChat();
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
        <Text style={themedStyles.headerTitle}>{Strings.chat}</Text>
      </View>
      <GiftedChat
        messages={listMessages}
        user={{
          _id: 1,
          name: 'Test',
          avatar: 'https://placeimg.com/140/140/any',
        }}
        renderBubble={renderBubble}
        renderMessageText={renderMessageText}
        renderTime={renderTime}
        renderComposer={renderComposer}
        renderSend={renderSend}
        onSend={(messages) => onSend(messages)}
      />
    </SafeAreaView>
  );
};

export default Chat;
