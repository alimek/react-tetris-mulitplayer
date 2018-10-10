import * as React from 'react';

import { Container, Image } from './styles';

interface IPlayerAvatarPropTypes {
  name: 'batman' | 'wiking' | 'cow' | 'ufo' | 'ghost';
}

const images = {
  batman: require('../../assets/batman.png'),
  wiking: require('../../assets/wiking.png'),
  cow: require('../../assets/cow.png'),
  ufo: require('../../assets/ufo.png'),
  ghost: require('../../assets/ghost.png'),
};

class PlayerAvatar extends React.Component<IPlayerAvatarPropTypes> {
  render() {
    const { name } = this.props;

    return (
      <Container>
        <Image
          source={images[name]}
          resizeMode="stretch"
        />
      </Container>
    );
  }
}

export default PlayerAvatar;
