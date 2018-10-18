import * as React from 'react';
import { connect } from 'react-redux';

import { HeaderContainer, Content } from './styles';
import { GameBoard } from 'containers';
import { IStore } from '../../store';
import { GameStatus } from 'reducers/game';
import { PlayerPad, PlayerStatus } from 'reducers/player';
import SkyBackground from 'components/SkyBackground';

interface ParentProps {
  gameStatus: GameStatus;
  playerStatus: PlayerStatus;
  selectedPad: PlayerPad | null;
}

interface DispatchProps {}

type Props = ParentProps & DispatchProps;

class Game extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { gameStatus, selectedPad } = this.props;

    return (
      <SkyBackground>
        <Content>
          <HeaderContainer />
          <GameBoard
            selectedPad={selectedPad}
            addLines={0}
            gameStatus={gameStatus}
          />
        </Content>
      </SkyBackground>
    );
  }
}

export default connect(
  (store: IStore) => ({
    playerStatus: store.player.status,
    gameStatus: store.game.status,
    selectedPad: store.player.pad,
  }),
  null,
)(Game);
