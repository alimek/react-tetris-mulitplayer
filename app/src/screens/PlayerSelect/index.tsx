import * as React from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  Container,
  SwiperContainer,
  Button,
  ArrowDown,
  ArrowUp,
  ControlsContainer,
  Text,
  PlayerText,
} from './styles';
import { Background, PlayerAvatar } from 'components';
import { screenHeight } from 'utils/screen';

interface IPlayerSelectPropTypes {}

interface State {
  isReady: boolean;
}

const background = require('../../assets/bg2.png');
const arrow = require('../../assets/arrow1.png');
const players = ['batman', 'ufo', 'wiking', 'ghost', 'cow'];

class PlayerSelect extends React.Component<IPlayerSelectPropTypes, State> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  };
  carousel: any;

  state = {
    isReady: false,
  };

  constructor(props) {
    super(props);

    setTimeout(
      () =>
        this.setState({
          isReady: true,
        }),
      100,
    );
  }

  renderCarouselItem = ({ item }) => {
    return <PlayerAvatar name={item} />;
  };

  moveUp = () => {
    if (this.carousel) {
      this.carousel.snapToNext();
    }
  };
  moveDown = () => {
    if (this.carousel) {
      this.carousel.snapToPrev();
    }
  };

  render() {
    const { isReady } = this.state;

    return (
      <Container>
        <Background source={background} />
        <ControlsContainer>
          <PlayerText>Player</PlayerText>
        </ControlsContainer>
        <SwiperContainer>
          <Button
            onPress={this.moveUp}
          >
            <ArrowUp source={arrow} />
          </Button>
          {isReady ? (
            <Carousel
              ref={c => {
                this.carousel = c;
              }}
              data={players}
              renderItem={this.renderCarouselItem}
              vertical
              itemWidth={100}
              itemHeight={100}
              sliderWidth={200}
              sliderHeight={screenHeight - 170}
              windowSize={screenHeight}
              firstItem={2}
              enableSnap={false}
              activeSlideAlignment="center"
              scrollEnabled={false}
              inactiveSlideScale={0.5}
            />
          ) : null}
          <Button
            onPress={this.moveDown}
          >
            <ArrowDown source={arrow} />
          </Button>
        </SwiperContainer>
      </Container>
    );
  }
}

export default PlayerSelect;
