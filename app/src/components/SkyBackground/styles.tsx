import styled from 'styled-components/native';
import { screenHeight, screenWidth } from 'utils/screen';
import { Animated } from 'react-native';

export const Container = styled.View`
  background-color: #190736;
  flex: 1;
`;

export const Image = Animated.createAnimatedComponent(styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${screenWidth}px;
  height: ${screenHeight}px;
`);
