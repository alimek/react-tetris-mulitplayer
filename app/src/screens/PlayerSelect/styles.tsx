import styled from 'styled-components/native';
import DefaultText from 'components/DefaultText';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  position: relative;
`;

export const SwiperContainer = styled.View`
  position: absolute;
  top: 10px;
  bottom: 50px;
  right: 100px;
  width: 60px;
  justify-content: center;
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
`;

export const ArrowUp = styled(Arrow)`
  transform: rotate(180deg) scale(1.5);
`;

export const ArrowDown = styled(Arrow)``;

export const ControlsContainer = styled.View`
  flex: 1;
  justify-content: center;
`;


export const Text = styled(DefaultText)`
  font-size: 30px;
`;


export const PlayerText = styled(DefaultText)`
  font-size: 30px;
  margin-left: 20%;
`;