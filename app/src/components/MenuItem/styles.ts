import styled from 'styled-components/native';
import { Animated } from 'react-native';

const ViewContainer = styled.View`
  padding: 5px 0;
`;
export const Container = Animated.createAnimatedComponent(ViewContainer);
export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Arrow = Animated.createAnimatedComponent(styled.Image`
  width: 18px;
  height: 14px;
`);

export const ArrowLeft = styled(Arrow)`
  transform: rotate(-90deg);
`;

export const ArrowRight = styled(Arrow)`
  transform: rotate(90deg);
`;

export const Text = Animated.createAnimatedComponent(styled.Text`
  font-size: 35px;
  text-align: center;
  color: white;
  margin: 0 10px;
  font-family: 'ArcadeClassic';
`);