import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import Posed from 'react-native-pose';
import { styles } from './SegmentStyle';
import { Metrics, scale } from '../../theme';
import { useThemedStyles } from '../../hooks';

let TabIndicator;
const tabJson = {};

const CONTAINER_WIDTH = Metrics.screenWidth - scale(48);

const useSegment = (props) => {
  const { tabs, onTabChange } = props;
  const { colors } = useThemedStyles();
  const [activeTab, setActiveTab] = useState(0);
  const [activeTitle, setActiveTitle] = useState('');
  const refFlatList = useRef(null);

  useEffect(() => {
    setActiveTitle(tabs.find((item) => item.id === activeTab).title);
  }, [activeTab, tabs]);

  const onPressTab = useCallback(
    (item, index) => {
      refFlatList?.current?.scrollToIndex({
        animated: true,
        index,
        viewPosition: 1.0,
      });
      setActiveTab(index);
      setActiveTitle(item.title);
      if (onTabChange) {
        onTabChange(item.id);
      }
    },
    [onTabChange]
  );

  const keyExtractor = useCallback((item) => {
    return item.name;
  }, []);

  const renderTab = useCallback(
    ({ item, index }) => {
      const extraStyle =
        index === 0
          ? styles.firstTab
          : index === tabs.length - 1 && styles.lastTab;
      const textStyle =
        activeTab === index
          ? [styles.tabActiveTextBehind, { color: colors.primaryOpacity10 }]
          : [styles.tabInactiveText, { color: colors.primaryOpacity60 }];

      return (
        <View
          key={item.title}
          style={[extraStyle, { backgroundColor: colors.primaryOpacity10 }]}
        >
          <TouchableOpacity
            activeOpacity={1}
            style={[
              styles.tabSubContainer,
              { width: CONTAINER_WIDTH / tabs.length - scale(6) },
            ]}
            onPress={() => onPressTab(item, index)}
          >
            <Text style={[textStyle]}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      );
    },
    [
      activeTab,
      colors.primaryOpacity10,
      colors.primaryOpacity60,
      onPressTab,
      tabs.length,
    ]
  );

  return {
    colors,
    activeTab,
    activeTitle,
    refFlatList,
    keyExtractor,
    renderTab,
  };
};

const Segment = (props) => {
  const {
    colors,
    activeTab,
    activeTitle,
    refFlatList,
    keyExtractor,
    renderTab,
  } = useSegment(props);
  const { tabs } = props;

  const width = CONTAINER_WIDTH;

  if (!TabIndicator) {
    for (let index = 0; index < tabs.length; index += 1) {
      tabJson[`tab${index}`] = {
        x: index * (width / tabs.length),
        transition: {
          type: 'spring',
          stiffness: 60,
          duration: 300,
          mass: 0.5,
        },
      };
    }
    TabIndicator = Posed.View(tabJson);
  }

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.subContainer}>
          <FlatList
            horizontal
            style={[
              styles.flatListStyle,
              { backgroundColor: colors.primaryOpacity10 },
            ]}
            ref={refFlatList}
            data={tabs}
            renderItem={renderTab}
            showsHorizontalScrollIndicator={false}
            keyExtractor={keyExtractor}
            scrollEnabled={false}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
        <TabIndicator style={styles.indicator} pose={`tab${activeTab}`}>
          <View
            style={[
              styles.tabSubContainer,
              styles.radiusStyle,
              {
                width: (CONTAINER_WIDTH - scale(24)) / tabs.length,
                backgroundColor: colors.primary,
              },
            ]}
          >
            <Text style={styles.tabActiveText}>{activeTitle}</Text>
          </View>
        </TabIndicator>
      </View>
    </View>
  );
};

Segment.propTypes = {
  tabs: PropTypes.oneOfType([PropTypes.array]).isRequired,
  activeTab: PropTypes.number,
  onTabChange: PropTypes.func,
};

Segment.defaultProps = {
  activeTab: 0,
  onTabChange: () => {},
};

export default Segment;
