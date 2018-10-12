import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const DefaultInput = styled.TextInput`
  height: 36px;
  width: 80%;
  font-size: 25px;
  border: 2px solid white;
  padding: 5px;
  color: white;
  font-family: 'Peepo';
  align-items: center;
`;

export const Square = Animated.createAnimatedComponent(styled.View<{length: number}>`
  position: absolute;
  top: 4px;
  left: ${props => props.length * 14 + 4 }px;
  height: 28px;
  width: 15px;
  background-color: white;
`);