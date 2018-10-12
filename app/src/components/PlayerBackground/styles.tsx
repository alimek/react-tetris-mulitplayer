import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  width: 225px;
`;

export const Diamond = styled.Image`
  width: 135px;
  height: 100px;
  align-self: flex-end;
`;

export const LabelBackground = styled.Image`
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -${38 / 2};
  width: 108px;
  height: 38px;
`;

export const Text = styled(DefaultText)`
  position: absolute;
  top: 50%;
  left: 20px;
  margin-top: -17px;
  font-size: 20px;
`;