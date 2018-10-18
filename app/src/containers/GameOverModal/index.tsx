import * as React from 'react';
import { Modal } from 'react-native';

import { Container, BackgroundContainer, Text } from './styles';

interface IGameOverModalPropTypes {
  isVisible: boolean;
}

class GameOverModal extends React.Component<IGameOverModalPropTypes> {
  render() {
    const { isVisible } = this.props;

    return (
      <Modal
        visible={isVisible}
        transparent
        animationType="fade"
      >
        <Container>
          <BackgroundContainer>
            <Text>GAME OVER</Text>
          </BackgroundContainer>
        </Container>
      </Modal>
    );
  }
}

export default GameOverModal;
