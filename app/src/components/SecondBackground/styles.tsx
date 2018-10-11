import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const BlackMountain = Animated.createAnimatedComponent(styled.Image`
  position: absolute;
  bottom: 0;
`);