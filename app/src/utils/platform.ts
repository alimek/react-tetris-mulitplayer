import { Dimensions, Platform } from "react-native";

export const isiOS = () => Platform.OS === 'ios';

export const isiPhoneX = () => {
  const d = Dimensions.get('window');
  const { height, width } = d;

  return isiOS() && (height === 812 || width === 812);
};