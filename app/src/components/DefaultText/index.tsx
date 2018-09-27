import * as React from 'react';

import { Container } from './styles';
import { TextProps } from 'react-native';

class DefaultText extends React.Component<TextProps> {
  render() {
    return (
      <Container style={this.props.style}>
        {this.props.children}
      </Container>
    );
  }
}

export default DefaultText;
