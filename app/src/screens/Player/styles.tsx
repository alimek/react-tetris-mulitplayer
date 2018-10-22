import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  flex: 1;
  background-color: rgb(15, 13, 19);
  
`;


export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 0.8;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 0 40px;
`;

export const Logo = styled.Image`
  width: 100%;
  height: 185px;
`;

export const Label = styled(DefaultText)`
  font-size: 30px;
`;

export const SubmitContainer = styled.TouchableOpacity`
  margin: 20px 0;
`;

export const SubmitText = styled(DefaultText)`
  font-size: 40px;
  text-align: center;
`;
