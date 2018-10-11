import * as React from 'react';

import { Container } from './styles';
import { PlayerAvatar } from 'components';
import { PlayerModels } from 'reducers/player';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePlayerModel } from 'actions/player';
import { IStore } from '../../store';

interface ParentProps {
  name: PlayerModels;
  currentIndex: number;
  index: number;
}

interface DispatchProps {
  actions: {
    changePlayerModel: (model: string) => void;
  };
}

type Props = ParentProps & DispatchProps;

class PlayerModel extends React.Component<Props> {
  render() {
    const { name, actions, currentIndex, index } = this.props;

    return (
      <Container
        disabled={index !== currentIndex}
        onPress={() => actions.changePlayerModel(name)}
      >
        <PlayerAvatar name={name} />
      </Container>
    );
  }
}

export default connect(
  (store: IStore) => ({
    currentIndex: store.player.currentIndex,
  }),
  dispatch => ({
    actions: bindActionCreators({ changePlayerModel }, dispatch),
  }),
)(PlayerModel);
