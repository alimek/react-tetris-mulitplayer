import styled from 'styled-components/native';

import { DefaultText } from 'components';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled(DefaultText)`
  font-size: 25px;
  text-align: center;
`;

export const PadsContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const PadBackground = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  width: 80%;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
`;