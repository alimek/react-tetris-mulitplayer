import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Container,
  Logo,
  LogoContainer,
  ContentContainer,
  Label,
  SubmitContainer,
  SubmitText,
} from './styles';
import { Input } from 'components';
import { IStore } from '../../store';
import { changePlayerName } from 'actions/player';
import { resetToMenu } from 'actions/app';

interface ParentProps {
  playerName: string;
}

interface DispatchProps {
  actions: {
    changePlayerName: (string) => void;
    resetToMenu: () => void;
  };
}

const pgs = require('../../assets/pgs.png');

type Props = ParentProps & DispatchProps;

class Player extends React.Component<Props> {
  input: any;

  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    setTimeout(this.focusInput, 200);
  }

  focusInput = () => {
    if (this.input) {
      this.input.focus();
    }
  };

  render() {
    const { playerName, actions } = this.props;

    return (
      <Container>
        <LogoContainer>
          <Logo resizeMode="stretch" source={pgs} />
        </LogoContainer>
        <ContentContainer>
          <Label>PLAYER NAME</Label>
          <Input
            inputRef={(input) => this.input = input}
            value={playerName}
            onChangeText={actions.changePlayerName}
          />
          {
            playerName.length > 3 ?
              <SubmitContainer
                onPress={actions.resetToMenu}
              >
                <SubmitText>
                  OK
                </SubmitText>
              </SubmitContainer> : null
          }
        </ContentContainer>
      </Container>
    );
  }
}

export default connect(
  (store: IStore) => ({
    playerName: store.player.name,
  }),
  dispatch => ({
    actions: bindActionCreators({ changePlayerName, resetToMenu }, dispatch),
  }),
)(Player);
