import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { View, Text, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { FixedData } from '../../constants';
import { styles } from './ProgressViewStyle';
import { useThemedStyles } from '../../hooks';
import { Metrics, scale } from '../../theme';
import { cloneDeep } from 'lodash';

const useProgressView = (props, ref) => {
  const { colors } = useThemedStyles();
  const { array, onChangeIndex } = props;
  const [activeStep, setActiveStep] = useState(-1);
  const [arrayProgress, setArrayProgress] = useState([]);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
    if (onChangeIndex) onChangeIndex(activeStep);
  }, [activeStep]);

  useEffect(() => {
    setActiveStep(0);
  }, [arrayProgress]);

  useEffect(() => {
    setArrayProgress(array);
  }, [array]);

  const startAnimation = useCallback(() => {
    if (arrayProgress.length <= 0) {
      return;
    }
    Animated.timing(progress, {
      toValue: (1 / arrayProgress.length) * (activeStep + 1),
      duration: 1500 / arrayProgress.length,
      useNativeDriver: false,
    }).start();
  }, [progress, arrayProgress.length, activeStep]);

  const onPressNext = useCallback(() => {
    if (activeStep < arrayProgress.length - 1) {
      setActiveStep(activeStep + 1);
    }
  }, [activeStep, arrayProgress, startAnimation]);

  const onPressPrevious = useCallback(() => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  }, [activeStep, arrayProgress, startAnimation]);

  useImperativeHandle(ref, () => ({
    onPressNext: onPressNext,
    onPressPrevious: onPressPrevious,
  }));

  const tabIndicatorWidth = progress?.interpolate({
    inputRange: [0, 1],
    outputRange: [0, Metrics.screenWidth - scale(48)],
  });

  return { colors, activeStep, arrayProgress, progress, tabIndicatorWidth };
};

const ProgressView = forwardRef((props, ref) => {
  const { style } = props;
  const { colors, activeStep, arrayProgress, tabIndicatorWidth } =
    useProgressView(props, ref);

  return (
    <View style={[style, styles.tabContainer]}>
      {arrayProgress.map((item, index) => (
        <View key={item.id} style={styles.tabInnerContainer}>
          <Text
            style={[
              styles.tabText,
              {
                color: activeStep >= index ? colors.primary : colors.inactive,
              },
            ]}
          >
            {item.title}
          </Text>
        </View>
      ))}
      <Animated.View
        style={{
          ...styles.tabIndicator,
          backgroundColor: colors.primary,
          width: tabIndicatorWidth,
        }}
      />
    </View>
  );
});

ProgressView.displayName = 'ProgressView';

ProgressView.propTypes = {
  array: PropTypes.array,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.number,
  ]),
  onChangeIndex: PropTypes.func,
};

ProgressView.defaultProps = {
  array: cloneDeep(FixedData.createGameTabData),
  style: {},
  onChangeIndex: () => {},
};

export default ProgressView;
