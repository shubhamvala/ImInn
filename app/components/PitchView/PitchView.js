import React, { useState, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { cloneDeep } from 'lodash';
import { FixedData } from '../../constants';
import { styles } from './PitchViewStyle';
import { useThemedStyles } from '../../hooks';
import { Colors } from '../../theme';

const usePitchView = (props) => {
  const { selectedPitch, array, onChangeView } = props;
  const { colors } = useThemedStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = cloneDeep(array);
    newData.map((item) => {
      if (selectedPitch?.id === item.id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setData(newData);
  }, [array, selectedPitch]);

  const onPressItem = useCallback(
    (item) => {
      const newData = cloneDeep(data);
      newData.map((dataItem) => {
        if (dataItem.id === item.id) {
          dataItem.isSelected = !item.isSelected;
        } else {
          dataItem.isSelected = false;
        }
      });
      const newItem = item;
      newItem.isSelected = !item.isSelected;
      if (onChangeView) {
        onChangeView(newItem.isSelected ? newItem : null);
      }
      setData(newData);
    },
    [data, onChangeView]
  );

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity
          style={[
            styles.itemContainer,
            {
              backgroundColor: item.isSelected
                ? colors.primary
                : colors.inactive3,
            },
          ]}
          onPress={() => onPressItem(item)}
        >
          <Text
            style={[
              styles.itemText,
              { color: item.isSelected ? Colors.white : colors.textInactive },
            ]}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    },
    [colors.inactive3, colors.primary, colors.textInactive, onPressItem]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return { data, renderItem, keyExtractor };
};

const PitchView = (props) => {
  const { data, renderItem, keyExtractor } = usePitchView(props);
  return (
    <View>
      <FlatList
        style={styles.flatListContainer}
        columnWrapperStyle={styles.columnStyle}
        data={data}
        numColumns={3}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default PitchView;

PitchView.propTypes = {
  selectedPitch: PropTypes.any,
  array: PropTypes.array,
  onChangeView: PropTypes.func,
};

PitchView.defaultProps = {
  selectedPitch: null,
  array: FixedData.pitchData,
  onChangeView: () => {},
};
