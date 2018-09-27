import * as React from 'react';
import Swiper from 'react-native-swiper';

import { Container } from './styles';
import { Game, PadSetup } from 'containers';

interface ISwiperPropTypes {}

class SwiperWrapper extends React.Component<ISwiperPropTypes> {
  render() {
    return (
      <Container>
        <Swiper>
          <Game />
          <PadSetup />
        </Swiper>
      </Container>
    );
  }
}

export default SwiperWrapper;
