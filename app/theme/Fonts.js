import { moderateScale } from "./Metrics";

const type = {
  nunitoSans: {
    bold: "NunitoSans-Bold",
    light: "NunitoSans-Light",
    regular: "NunitoSans-Regular",
    semiBold: "NunitoSans-SemiBold",
  },
  lato: {
    bold: "Lato-Bold",
    light: "Lato-Light",
    regular: "Lato-Regular",
  },
};

const size = {
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(26),
  h5: moderateScale(20),
  h6: moderateScale(19),
  input: moderateScale(18),
  regular: moderateScale(17),
  label: moderateScale(16),
  text: moderateScale(15),
  medium: moderateScale(14),
  small: moderateScale(12),
  tiny: moderateScale(8.5),
};

export default {
  type,
  size,
};
