import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';
import { primaryColor } from '../../theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled(DefaultText)`
  font-size: 27px;
  padding: 0 40px;
`;

export const Button = styled.TouchableOpacity<{
  marginTop?: number;
}>`
  margin-top: ${props => props.marginTop ? props.marginTop : 0}px;
`;

export const ButtonText = styled(DefaultText)<{
  isReady: boolean;
}>`
  color: ${props => props.isReady ? primaryColor : 'white'};
  font-size: 40px;
`;

export const ButtonImage = styled.Image``;