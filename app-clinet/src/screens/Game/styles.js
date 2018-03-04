import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 15px;
`;

export const Label = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const Menu = styled.View``;

export const Button = styled.TouchableOpacity`
  padding: ${props => props.padding > 0 ? props.padding : 10}px;
  background-color: ${props => props.theme.primaryColor};
  margin: 5px;
`;

export const ButtonText = styled.Text`
  font-size: ${props => props.size > 0 ? props.size : 10}px;
  color: white;
  text-align: center;
`;

export const SideContainer = styled.View`
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.View`
  flex: 0.3;
  justify-content: center;
  align-items: center;
`;

export const Buttons = styled.View`
  flex: 0.7;
  flex-direction: row;
`;

export const BottomButton = styled.TouchableOpacity`
  height: 150px;
  justify-content: center;
  background-color: ${props => props.theme.primaryColor};
  margin: 5px;
`;

export const Side = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;
