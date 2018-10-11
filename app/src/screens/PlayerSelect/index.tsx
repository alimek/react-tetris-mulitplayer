import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  SwiperContainer,
  Button,
  ArrowDown,
  ArrowUp,
  ControlsContainer,
  Text,
  Input,
  PlayerNameContainer,
} from './styles';
import { ThirdBackground } from 'components';
import { PlayerModel, BackButton } from 'containers';
import { screenHeight } from 'utils/screen';
import { IStore } from '../../store';
import {
  changePlayerName,
  changePlayerModel,
  changeModelIndex,
} from 'actions/player';

interface ParentProps {
  name: string;
  model: string | null;
}

interface DispatchProps {
  actions: {
    changePlayerName: (name: string) => void;
    changePlayerModel: (model: string) => void;
    changeModelIndex: (index: number) => void;
  };
}

interface State {
  isReady: boolean;
}

type Props = ParentProps & DispatchProps;

const arrow = require('../../assets/arrow1.png');
const players = ['batman', 'ufo', 'wiking', 'ghost', 'cow'];

class PlayerSelect extends React.Component<Props, State> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'transparent',
      borderBottomWidth: 0,
    },
    title: 'PLAYER',
    headerTitleStyle: {
      fontFamily: 'Peepo',
      fontSize: 25,
    },
    headerTintColor: '#fff',
    headerLeft: <BackButton />,
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
    const { name, actions } = this.props;

    return (
      <Container>
        <ThirdBackground />
        <ControlsContainer>
          <PlayerNameContainer>
            <Text>NAME</Text>
            <Input
              value={name}
              onChangeText={actions.changePlayerName}
              placeholderTextColor="white"
              selectionColor="white"
            />
          </PlayerNameContainer>
        </ControlsContainer>
        <SwiperContainer>
          <Button onPress={this.moveUp}>
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
              inactiveSlideScale={1}
              onSnapToItem={actions.changeModelIndex}
            />
          ) : null}
          <Button onPress={this.moveDown}>
            <ArrowDown source={arrow} />
          </Button>
        </SwiperContainer>
      </Container>
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
      { changePlayerName, changePlayerModel, changeModelIndex },
      dispatch,
    ),
  }),
)(PlayerSelect);
