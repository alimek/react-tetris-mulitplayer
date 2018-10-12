import styled from 'styled-components/native';

import { DefaultText } from 'components';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const FooterLinkContainer = styled.View`
  align-self: flex-end;
  flex-direction: row;
  padding: 10px;
`;

export const FooterLinkText = styled(DefaultText)`
  align-self: flex-end;
  color: white;
`;

export const Logo = styled.Image`
  width: 70%;
  height: 258px;
  margin: 50px 0;
  align-self: center;
`;

export const MenuContainer = styled.View`
  margin: 20px 0;
  flex: 1;
`;
