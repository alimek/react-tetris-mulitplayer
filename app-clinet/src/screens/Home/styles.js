import styled from 'styled-components/native';
import { Button, TextField } from 'react-native-ios-kit';

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  margin: 0 20px;
`;

export const Header = styled.Text`
  font-size: 50px;
  padding: 60px 0;
  text-align: center;
`;

export const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const Input = styled(TextField)`
`;

export const CustomButton = styled(Button)`
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

