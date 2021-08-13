import React, { useState, useCallback, useEffect } from 'react';
import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { FixedData } from '../../constants';
import { SVG } from '../../assets';
import { styles } from './SquareCheckBoxStyle';
import { useThemedStyles } from '../../hooks';
import { cloneDeep } from 'lodash';

const { SquareCheck, SquareUncheck } = SVG;

const useSquareCheckBox = (props) => {
  const { selectedUser, checkData, onCheckChange } = props;
  const { colors } = useThemedStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = cloneDeep(checkData);
    newData.map((item) => {
      if (selectedUser?.id === item.id) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setData(newData);
  }, [checkData, selectedUser]);

  const onPressItem = useCallback(
    (item) => {
      const cloneData = cloneDeep(data);
      cloneData.map((dataItem) => {
        if (dataItem.id === item.id) {
          dataItem.isSelected = !item.isSelected;
        } else {
          dataItem.isSelected = false;
        }
      });
      const newItem = item;
      newItem.isSelected = !item.isSelected;
      if (onCheckChange) {
        onCheckChange(newItem.isSelected ? newItem : null);
      }
      setData(cloneData);
    },
    [data, onCheckChange]
  );

  const renderItem = useCallback(
    ({ item }) => {
      return (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => onPressItem(item)}
        >
          {item.isSelected ? (
            <SquareCheck stroke={colors.primary} fill={colors.primary} />
          ) : (
            <SquareUncheck stroke={colors.inactive2} />
          )}
          <View style={styles.itemIcon}>
            <item.icon />
          </View>
          <Text style={[styles.itemText, { color: colors.inactive2Opacity80 }]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    },
    [colors.inactive2, colors.inactive2Opacity80, colors.primary, onPressItem]
  );

  const keyExtractor = useCallback((item) => item.id.toString(), []);

  return {
    data,
    renderItem,
    keyExtractor,
  };
};

const SquareCheckBox = (props) => {
  const { data, renderItem, keyExtractor } = useSquareCheckBox(props);
  return (
    <View>
      <FlatList
        data={data}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

SquareCheckBox.propTypes = {
  selectedUser: PropTypes.any,
  checkData: PropTypes.array,
  onCheckChange: PropTypes.func,
};

SquareCheckBox.defaultProps = {
  selectedUser: null,
  checkData: FixedData.userType,
  onCheckChange: () => {},
};

export default SquareCheckBox;
