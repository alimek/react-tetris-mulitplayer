import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';
import { isiPhoneX } from 'utils/platform';

const HEADER_HEIGHT = isiPhoneX() ? 110 : 70;

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  height: ${HEADER_HEIGHT}px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  
`;

export const Title = styled(DefaultText)`
  font-size: 20px;
  flex: 1;
  text-align: center;
  margin-right: 35px;
`;

export const Content = styled.View<{ hasHeader?: boolean}>`
  flex: 1;
  margin-top: ${props => props.hasHeader ? HEADER_HEIGHT : 0};
`;
