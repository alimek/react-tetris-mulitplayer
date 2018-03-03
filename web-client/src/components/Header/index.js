// @flow

import React from 'react';

import {
  Container,
} from './styles';

type HeaderPropTypes = {
  children: string,
};

class Header extends React.PureComponent<HeaderPropTypes> {
  render() {
    const { children } = this.props;

    return (
      <Container>{children}</Container>
    );
  }
}

export default Header;
