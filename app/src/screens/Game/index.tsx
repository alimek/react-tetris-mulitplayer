import * as React from 'react';
import { connect } from 'react-redux';

import { HeaderContainer, Content } from './styles';
import { GameBoard } from 'containers';
import { GameStatus } from 'reducers/game';
import { PlayerPad } from 'reducers/player';
import SkyBackground from 'components/SkyBackground';

interface ParentProps {
  gameStatus: GameStatus;
  selectedPad: PlayerPad | null;
}

interface DispatchProps {}

type Props = ParentProps & DispatchProps;

class Game extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SkyBackground>
        <Content>
          <HeaderContainer />
          <GameBoard />
        </Content>
      </SkyBackground>
    );
  }
}

export default connect(
  null,
  null,
)(Game);
