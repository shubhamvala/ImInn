import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 797;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  baseMargin: verticalScale(10),
  floatingLeft: scale(13),
  doubleBaseMargin: verticalScale(20),
  smallMargin: verticalScale(5),
  textFieldRadius: 6,
  borderLineWidth: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === "ios" ? verticalScale(64) : verticalScale(54),
  buttonRadius: 4,
  isSmallDevice: isSmallSize(),
  isIphoneXGreater: isIphoneXGreater(),
  icons: {
    tiny: scale(16),
    small: scale(20),
    medium: scale(30),
    large: scale(45),
    xl: scale(50),
  },
  images: {
    small: scale(20),
    medium: scale(40),
    large: scale(60),
    profile: scale(115),
    logoSmall: scale(110),
    logo: scale(200),
  },
  headerShadow: {
    shadowColor: "grey",
    shadowOffset: { width: 1, height: 2.5 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  size: {
    s: 5,
    m: 10,
    l: 15,
    xl: 20,
    xxl: 25,
    xxxl: 30,
  },
};

export function isIphoneXGreater() {
  return (
    // This has to be iOS
    Platform.OS === "ios" &&
    // Check either, iPhone X or XR
    isIPhoneXSize()
  );
}

function isIPhoneXSize() {
  return height >= 736 || width >= 736;
}

function isSmallSize() {
  return height <= 568 || width <= 320;
}

export { scale, verticalScale, moderateScale, Metrics };
