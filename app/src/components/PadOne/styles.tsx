import styled from 'styled-components/native';

export const Container = styled.View`
  width: 137px;
  height: 73px;
  position: relative;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Touchable = styled.TouchableOpacity<{
  size?: number;
}>`
  position: absolute;
  width: ${props => props.size || 16}px;
  height: ${props => props.size || 16}px;
`;

export const TouchableChild = styled.View``;