import * as React from 'react';
import Swiper from 'react-native-swiper';

interface ParentProps {}

import Menu from 'screens/Menu';
import SelectPad from 'screens/SelectPad';
import PlayerSelect from 'screens/SelectPlayer';
import Game from 'screens/Game';
import SkyBackground from 'components/SkyBackground';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSwiper } from 'utils/swiper';
import Page from 'components/Page';

class SwiperPage extends React.Component<ParentProps> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SkyBackground>
        <Page>
          <Swiper
            ref={setSwiper}
            loop={false}
            showsButtons={false}
            showsPagination={false}
            autoplay={false}
            scrollEnabled={false}
            loadMinimal
            // @ts-ignore
            loadMinimalSize={1}
          >
            <Menu />
            <PlayerSelect />
            <SelectPad />
            <Game />
          </Swiper>
        </Page>
      </SkyBackground>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    actions: bindActionCreators({}, dispatch),
  })
)(SwiperPage);
