import * as React from 'react';

import { Container, Text, Button, ButtonText } from './styles';
import { connect } from 'react-redux';
import { IStore } from '../../store';
import { bindActionCreators } from 'redux';
import { back } from 'actions/nav';
import { setPlayerNotReady, setPlayerReady } from 'actions/player';

interface ParentProps {
  isReady: boolean;
}

interface DispatchProps {
  actions: {
    back: () => {};
    setPlayerNotReady: () => {};
    setPlayerReady: () => {};
  };
}

type Props = ParentProps & DispatchProps;

class PlayerNotReady extends React.Component<Props> {
  render() {
    const { isReady, actions } = this.props;

    return (
      <Container>
        <Text>ARE YOU READY?</Text>
        <Button marginTop={20} onPress={actions.setPlayerReady}>
          <ButtonText isReady={isReady === true}>YES</ButtonText>
        </Button>
        <Button onPress={actions.setPlayerNotReady}>
          <ButtonText isReady={isReady === false}>NO</ButtonText>
        </Button>
        <Button marginTop={40} onPress={actions.back}>
          <Text>BACK</Text>
        </Button>
      </Container>
    );
  }
}

export default connect(
  (store: IStore) => ({
    isReady: store.player.isReady,
  }),
  dispatch => ({
    actions: bindActionCreators(
      { back, setPlayerNotReady, setPlayerReady },
      dispatch,
    ),
  }),
)(PlayerNotReady);
