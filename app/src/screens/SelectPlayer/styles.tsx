import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';
import { isiPhoneX } from 'utils/platform';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  position: relative;
`;

export const SwiperContainer = styled.View`
  flex: 0.5;
  justify-content: center;
  padding-bottom: 110px;
`;

export const Button = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.Image`
  width: 18px;
  height: 14px;
  transform: scale(1.5);
  margin-left: 60px;
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(180deg) scale(1.5);
`;

export const ArrowDown = styled(Arrow)``;

export const ControlsContainer = styled.View`
  flex: 1;
`;

export const PlayerNameContainer = styled.View`
  padding: 15px 15px 0 15px;
`;

export const Text = styled(DefaultText)`
  font-size: 20px;
`;

export const Input = styled.TextInput`
  height: 35px;
  width: 80%;
  font-size: 24px;
  border: 2px solid white;
  padding: 5px;
  color: white;
  font-family: 'Peepo';
`;

export const PlayerBackgroundPosition = styled.View`
  position: absolute;
  top: 50%;
  margin-top: -${isiPhoneX() ? 25 : 95/2}px;
  right: 25px;
`;