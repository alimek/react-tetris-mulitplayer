import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;;
`;

export const Text = styled.Text`
  flex: 1;
  font-size: 15px;
  text-align: ${props => props.align || 'center'};
  padding: 5px 10px;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 0 15px;
  background-color: ${props => props.theme.primaryColor};
  border-radius: 5px;
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
  color: ${props => props.isConnected ? '#abd14d' : '#d51630'};
`;
