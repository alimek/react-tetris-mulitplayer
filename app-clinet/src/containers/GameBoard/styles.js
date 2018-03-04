import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 15px;
`;

export const GameOverContainer = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const GaveOverTextContainer = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 15px;
`;

export const GameOverText = styled.Text`
  color: white;
  font-size: 15px;
`;
