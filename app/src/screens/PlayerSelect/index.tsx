import * as React from 'react';
import Carousel from 'react-native-snap-carousel';

import {
  Container,
  SwiperContainer,
  Button,
  ArrowDown,
  ArrowUp,
  ControlsContainer,
  PlayerText,
  Text,
  Input,
  PlayerNameContainer,
} from './styles';
import { ThirdBackground, PlayerAvatar } from 'components';
import { screenHeight } from 'utils/screen';
import BackButton from 'containers/BackButton';
import { connect } from 'react-redux';
import { IStore } from '../../store';
import { bindActionCreators } from 'redux';
import { changePlayerName } from 'actions/player';

interface ParentProps {
  name: string;
}

interface DispatchProps {
  actions: {
    changePlayerName: (name: string) => void;
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
          <PlayerText>PLAYER</PlayerText>
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
              inactiveSlideScale={1}
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

export default connect(
  (store: IStore) => ({
    name: store.player.name.toUpperCase(),
  }),
  dispatch => ({
    actions: bindActionCreators({ changePlayerName }, dispatch),
  }),
)(PlayerSelect);
