import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  flex: 1;
  margin: 15px;
`;

export const GameContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

export const UserDetailsContainer = styled.View`
  align-items: center;
`;

export const Label = styled(DefaultText)`
  font-size: 25px;
  margin-bottom: 5px;
`;