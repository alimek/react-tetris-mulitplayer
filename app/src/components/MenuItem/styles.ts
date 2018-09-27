import styled from 'styled-components/native';
import { Animated } from 'react-native';

import DefaultText  from '../DefaultText';

const ViewContainer = styled.View`
  padding: 5px 0;
`;
export const Container = Animated.createAnimatedComponent(ViewContainer);
export const Touchable = styled.TouchableOpacity``;
export const Text = styled(DefaultText)`
  font-size: 30px;
  text-align: center;
`;