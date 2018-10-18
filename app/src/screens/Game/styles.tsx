import styled from 'styled-components/native';
import { isiPhoneX } from 'utils/platform';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  padding: 20px;
`;

export const PadContainer = styled.View`
  margin-bottom: 55px;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  margin-bottom: ${isiPhoneX() ? 20 : 0}px;
`;