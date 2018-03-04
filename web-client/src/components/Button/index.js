// @flaw
import React from 'react';

import {
  Container,
} from './styles';

type ButtonPropTypes = {
  children: string,
  onClick: Function,
};

class Button extends React.PureComponent<ButtonPropTypes> {
  render() {
    return (
      <Container
        onClick={this.props.onClick}
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Button;
