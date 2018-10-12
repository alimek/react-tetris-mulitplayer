import * as React from 'react';

import { Container } from './styles';

interface ISkyBackgroundPropTypes {}

const sky = require('../../assets/background.gif');

class SkyBackground extends React.PureComponent<ISkyBackgroundPropTypes> {
  render() {
    return (
      <Container source={sky} resizeMode="stretch">
        {this.props.children}
      </Container>
    );
  }
}

export default SkyBackground;
