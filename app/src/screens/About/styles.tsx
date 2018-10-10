import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  justify-content: center;
  align-items: center;
`;

export const Header = styled(DefaultText)`
  font-size: 50px;
`;

export const Text = styled(DefaultText)`
  font-size: 20px;
  margin-bottom: 20px;
`;