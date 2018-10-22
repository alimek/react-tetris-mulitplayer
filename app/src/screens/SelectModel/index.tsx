import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  ArrowDown,
  ArrowUp,
  Button,
  Container,
  PlayerBackgroundPosition,
  SwiperContainer,
  ControlsContainer,
} from './styles';
import { Page, PlayerBackground, ThirdBackground } from 'components';
import { PlayerModel } from 'containers';
import { screenHeight } from 'utils/screen';
import { IStore } from '../../store';
import {
  changeModelIndex,
  changePlayerModel,
} from 'actions/player';
import { players } from 'reducers/player';

interface ParentProps {
  name: string;
  model: string | null;
}

interface DispatchProps {
  actions: {
    changePlayerModel: (model: string) => void;
    changeModelIndex: (index: number) => void;
  };
}

interface State {
  isReady: boolean;
}

type Props = ParentProps & DispatchProps;

const arrow = require('../../assets/arrow1.png');

class SelectModel extends React.Component<Props, State> {
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

  renderCarouselItem = ({ item, index }) => {
    return <PlayerModel name={item} index={index} />;
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
    const { actions, model } = this.props;

    return (
      <Page hasHeader showBackButton title="PLAYER">
        <Container>
          <ThirdBackground />
          <ControlsContainer />
          <SwiperContainer>
            <Button onPress={this.moveUp}>
              <ArrowUp source={arrow} />
            </Button>
            <PlayerBackgroundPosition>
              <PlayerBackground name={model && model.toUpperCase()} />
            </PlayerBackgroundPosition>
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
                sliderHeight={screenHeight - 250}
                windowSize={screenHeight}
                firstItem={2}
                enableSnap={false}
                activeSlideAlignment="center"
                inactiveSlideScale={0.5}
                inactiveSlideShift={10}
                enableMomentum
                decelerationRate="fast"
                scrollEndDragDebounceValue={20}
                onSnapToItem={actions.changeModelIndex}
              />
            ) : null}
            <Button onPress={this.moveDown}>
              <ArrowDown source={arrow} />
            </Button>
          </SwiperContainer>
        </Container>
      </Page>
    );
  }
}

export default connect(
  (store: IStore) => ({
    model: store.player.model,
    name: store.player.name.toUpperCase(),
  }),
  dispatch => ({
    actions: bindActionCreators(
      { changePlayerModel, changeModelIndex },
      dispatch,
    ),
  }),
)(SelectModel);
