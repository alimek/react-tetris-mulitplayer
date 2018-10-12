import * as React from 'react';

import { Page } from 'components';

interface ParentProps {}

class Game extends React.Component<ParentProps> {
  render() {
    return <Page hasHeader showBackButton title="GAME" />;
  }
}

export default Game;
