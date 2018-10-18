import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { DefaultText } from 'components';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = Animated.createAnimatedComponent(styled.View`
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  padding: 20px;
`);

export const Text = styled(DefaultText)`
  font-size: 50px;
`;
