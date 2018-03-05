import styled from 'styled-components/native';

import { Button } from 'react-native-ios-kit';

export const Container = styled.View`
  flex-direction: column;
  padding-top: 50px;
  align-items: center;
  background-color: #dddddd;
  border-bottom-width: 1px;
  border-bottom-color: #c5c5c5;
`;

export const Row = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: ${props => props.align || 'center'};
  padding: 5px 10px;
`;

export const BackButton = styled(Button)`
  margin: 0 15px;
`;

export const ButtonText = styled.Text`
  color: white;
`;

export const StatusText = styled.Text`
  flex: 1;
  align-self: flex-start;
  text-align: right;
  font-size: 15px;
  padding: 0 15px;
  color: ${props => props.isConnected ? '#b0d64d' : '#d51630'};
`;
