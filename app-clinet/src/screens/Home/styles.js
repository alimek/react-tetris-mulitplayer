import styled from 'styled-components/native';

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

export const Input = styled.TextInput`
  background-color: white;
  border: 1px solid #cbcbcb;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 30px;
`;

export const Button = styled.TouchableOpacity`
  padding: 25px;
  background-color: ${props => props.disabled ? props.theme.disabledPrimaryColor : props.theme.primaryColor};
  border-radius: 10px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

