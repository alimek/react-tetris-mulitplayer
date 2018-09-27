import * as React from 'react';

import { Container, Touchable, Text } from './styles';

interface IMenuItemPropTypes {
  text: string;

}

class MenuItem extends React.Component<IMenuItemPropTypes> {
  render() {
    const { text } = this.props;

    return (
      <Container>
        <Touchable>
          <Text>{text}</Text>
        </Touchable>
      </Container>
    );
  }
}

export default MenuItem;
